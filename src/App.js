import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { init } from './store/actions';
import Navbar from './components/Navbar/Navbar';
import { Container, Box } from '@material-ui/core';
import Table from './components/Table/Table';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(init());
	}, [dispatch]);

	return (
		<div className='App'>
			<Container>
				<Navbar />
				<Box component='div' m={1} />
				<Table />
			</Container>
		</div>
	);
}

export default App;
