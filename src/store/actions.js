import { setUsers, setUsersWithCount } from './usersReducer';

const filterUsers = (users) =>
	users.map(({ email, name, gender, picture, location, dob, cell }, idx) => ({
		email,
		name: `${name.title} ${name.first} ${name.last}`,
		gender,
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
		users = users.filter((user) => user.index !== id);
		usersCount = usersCount - 1;
		dispatch(setUsersWithCount(users, usersCount));
	};
};
