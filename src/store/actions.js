import {
	setUsers,
	setUsersWithCount,
	toggleWasSorted,
	setFilters,
} from './usersReducer';

const filterUsers = (users) =>
	users.map(({ email, name, gender, picture, location, dob, cell }, idx) => ({
		email,
		name: `${name.title} ${name.first} ${name.last}`,
		gender: gender === 'male' ? 'Мужской' : 'Женский',
		img: picture.medium,
		location,
		age: dob.age,
		id: idx,
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

export const deleteUser = (id, { users, usersCount, filters }) => {
	return (dispatch) => {
		if (filters) {
			const { email, name } = users.find((user) => user.id === id);
			filters.name = filters.name.filter((n) => n !== name);
			filters.email = filters.email.filter((e) => e !== email);
		}
		users = users.filter((user) => user.id !== id);
		usersCount = usersCount - 1;
		localStorage.setItem('usersCount', usersCount);
		dispatch(setUsersWithCount(users, usersCount));
		dispatch(setFilters(filters));
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
			users = users.sort((a, b) => a.id - b.id);
		}

		dispatch(setUsers(users));
		dispatch(toggleWasSorted());
	};
};
