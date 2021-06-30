import { setUsers } from './usersReducer';

export const fetchUsers = (count) => {
	return async (dispatch) => {
		try {
			let users = await fetch(
				`https://api.randomuser.me/?results=${count}`
			)
				.then((res) => res.json())
				.then((data) => data.results)
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
	const localStorageUsersCount = localStorage.getItem('usersCount');
	if (localStorageUsersCount && localStorageUsersCount > 0) {
		dispatch(fetchUsers(localStorageUsersCount));
	}
};
