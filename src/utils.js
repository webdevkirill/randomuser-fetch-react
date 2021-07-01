export const filtersFromUsers = (users) =>
	users.reduce(
		(acc, user) => {
			acc.name.values.push(user.name);
			acc.email.values.push(user.email);

			if (acc.gender.values.indexOf(user.gender) === -1) {
				acc.gender.values.push(user.gender);
			}
			return acc;
		},
		{
			name: {
				title: 'Имя',
				values: [],
			},
			gender: {
				title: 'Пол',
				values: [],
			},
			email: {
				title: 'Email',
				values: [],
			},
		}
	);

export const usersWithFilters = (users, filters) => {
	if (!filters) return users;

	return users.filter((user) => {
		let isFiltered = false;
		Object.keys(filters).map((filter) => {
			if (
				filters[filter].length &&
				filters[filter].indexOf(user[filter]) === -1
			) {
				isFiltered = true;
			}
		});
		return !isFiltered;
	});
};
