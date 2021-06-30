import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/actions';

export const Inner = function () {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUsers(5));
	}, [dispatch]);

	return <div></div>;
};
