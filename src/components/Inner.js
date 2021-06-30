import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { init } from '../store/actions';

export const Inner = function () {
	const dispatch = useDispatch();
	useEffect(() => {
		init(dispatch);
	}, [dispatch]);

	const users = useSelector((state) => state.users.users);
	console.log(users);

	return <div></div>;
};
