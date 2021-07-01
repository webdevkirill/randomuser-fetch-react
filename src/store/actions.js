import { setUsers, setUsersWithCount, toggleWasSorted } from './usersReducer';

const filterUsers = (users) =>
	users.map(({ email, name, gender, picture, location, dob, cell }, idx) => ({
		email,
		name: `${name.title} ${name.first} ${name.last}`,
		gender: gender === 'male' ? 'Мужской' : 'Женский',
		img: picture.medium,
		location,
		age: dob.age,
		id: cell,
		index: idx,
	}));

export const fetchUsers = (count) => {
	return async (dispatch) => {
		try {
			let users = await fetch(
				`https://api.randomuser.me/?results=${count}`
			)
				.then((res) => res.json())
				.then((data) => filterUsers(data.results))
				.catch((err) => {
					throw err;
				});

			dispatch(setUsersWithCount(users, count));
			localStorage.setItem('usersCount', count);
		} catch (err) {
			console.error(err);
		}
	};
};

export const init = () => {
	return (dispatch) => {
		const localStorageUsersCount = +localStorage.getItem('usersCount');
		if (localStorageUsersCount && localStorageUsersCount > 0) {
			dispatch(fetchUsers(localStorageUsersCount));
		}
	};
};

export const deleteUser = (id, { users, usersCount }) => {
	return (dispatch) => {
		users = users.filter((user) => user.id !== id);
		usersCount = usersCount - 1;
		localStorage.setItem('usersCount', usersCount);
		dispatch(setUsersWithCount(users, usersCount));
	};
};

export const sortUsers = (field, { users, wasSorted }) => {
	return (dispatch) => {
		if (!wasSorted) {
			users = users.sort((a, b) => {
				const aField = a[field].toLowerCase();
				const bfield = b[field].toLowerCase();
				if (aField < bfield) return -1;
				if (aField > bfield) return 1;
				return 0;
			});
		} else {
			users = users.sort((a, b) => a.index - b.index);
		}

		dispatch(setUsers(users));
		dispatch(toggleWasSorted());
	};
};
