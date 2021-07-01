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
