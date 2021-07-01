import React from 'react';
import { useSelector } from 'react-redux';
import TableComponent from './TableComponent';

export default function Table() {
	const users = useSelector((state) => state.users.users).map(
		({ name, gender, email, id }) => ({ name, gender, email, id })
	);

	const columns = [
		{ field: 'name', headerName: 'Имя', width: 300, sortable: false },
		{ field: 'gender', headerName: 'Пол', width: 130, sortable: false },
		{ field: 'email', headerName: 'Email', width: 250, sortable: false },
	];

	return <TableComponent columns={columns} rows={users} countOnPage={5} />;
}
