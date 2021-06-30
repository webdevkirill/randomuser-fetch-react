import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { init } from './store/actions';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		init(dispatch);
	}, [dispatch]);

	const state = useSelector((state) => state);
	console.log(state);

	return <div className='App'></div>;
}

export default App;
