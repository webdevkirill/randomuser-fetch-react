import { SET_USERS } from './types';

const defaulState = {
	users: [],
};

const handlers = {
	SET_USERS: (state, { payload }) => ({ ...state, users: payload }),
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
