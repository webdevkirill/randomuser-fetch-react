import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableComponent from './TableComponent';
import { deleteUser } from '../../store/actions';

export default function Table() {
	const usersState = useSelector((state) => state.users);
	const users = usersState.users.map(({ name, gender, email, id }) => ({
		name,
		gender,
		email,
		id,
	}));
	const dispatch = useDispatch();

	const columns = [
		{ field: 'name', headerName: 'Имя', width: 300, sortable: false },
		{ field: 'gender', headerName: 'Пол', width: 130, sortable: false },
		{ field: 'email', headerName: 'Email', width: 250, sortable: false },
	];

	return (
		<TableComponent
			columns={columns}
			rows={users}
			countOnPage={5}
			deleteUserHandler={(id) => dispatch(deleteUser(id, usersState))}
		/>
	);
}
