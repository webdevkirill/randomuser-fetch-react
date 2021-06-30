import { SET_USERS, SET_USERS_WITH_COUNT } from './types';

const defaulState = {
	users: [],
	usersCount: null,
};

const handlers = {
	SET_USERS: (state, { payload }) => ({
		...state,
		users: payload,
		featuredUsers: payload,
	}),
	SET_USERS_WITH_COUNT: (state, { payload }) => ({
		...state,
		...payload,
	}),
	default: (state, action) => state,
};

export const usersReducer = (state = defaulState, action) => {
	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
};

export const setUsersWithCount = (users, usersCount) => ({
	type: SET_USERS_WITH_COUNT,
	payload: { users, usersCount },
});

export const setUsers = (users) => ({
	type: SET_USERS,
	payload: users,
});
