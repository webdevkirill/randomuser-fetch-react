import { setUsers, setUsersCount } from './usersReducer';

const filterUsers = (users) =>
	users.map(({ email, name, gender, picture, location, dob, cell }) => ({
		email,
		name: `${name.title} ${name.first} ${name.last}`,
		gender,
		img: picture.medium,
		location,
		age: dob.age,
		id: cell,
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

			dispatch(setUsers(users));
		} catch (err) {
			console.error(err);
		}
	};
};

export const init = (dispatch) => {
	const localStorageUsersCount = +localStorage.getItem('usersCount');
	if (localStorageUsersCount && localStorageUsersCount > 0) {
		dispatch(setUsersCount(localStorageUsersCount));
		dispatch(fetchUsers(localStorageUsersCount));
	}
};

export const deleteUser = (id, users, featuredUsers) => {};
