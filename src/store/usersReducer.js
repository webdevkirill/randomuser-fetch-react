import {
	SET_FILTERS,
	SET_USERS,
	SET_USERS_WITH_COUNT,
	TOGGLE_WAS_SORTED,
} from './types';

const defaulState = {
	users: [],
	usersCount: null,
	wasSorted: false,
	filters: null,
};

const handlers = {
	SET_USERS: (state, { payload }) => ({
		...state,
		users: payload,
	}),
	SET_USERS_WITH_COUNT: (state, { payload }) => ({
		...state,
		...payload,
	}),
	TOGGLE_WAS_SORTED: (state) => ({ ...state, wasSorted: !state.wasSorted }),
	SET_FILTERS: (state, { payload }) => ({ ...state, filters: payload }),
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

export const toggleWasSorted = () => ({
	type: TOGGLE_WAS_SORTED,
});

export const setFilters = (filters) => ({
	type: SET_FILTERS,
	payload: filters,
});
