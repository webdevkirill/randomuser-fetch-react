import { SET_USERS_COUNT } from './types';
import { SET_USERS } from './types';

const defaulState = {
	users: [],
	featuredUsers: [],
	usersCount: null,
};

const handlers = {
	SET_USERS: (state, { payload }) => ({
		...state,
		users: payload,
		featuredUsers: payload,
	}),
	SET_USERS_COUNT: (state, { payload }) => ({
		...state,
		usersCount: payload,
	}),
	default: (state, action) => state,
};

export const usersReducer = (state = defaulState, action) => {
	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
};

export const setUsers = (users) => ({
	type: SET_USERS,
	payload: users,
});

export const setUsersCount = (count) => ({
	type: SET_USERS_COUNT,
	payload: count,
});
