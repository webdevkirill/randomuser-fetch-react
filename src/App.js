import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { init } from './store/actions';
import Navbar from './components/Navbar/Navbar';
import { Container } from '@material-ui/core';

function App() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	useEffect(() => {
		dispatch(init());
	}, [dispatch]);

	console.log(state);

	return (
		<div className='App'>
			<Container fixed>
				<Navbar />
			</Container>
		</div>
	);
}

export default App;
