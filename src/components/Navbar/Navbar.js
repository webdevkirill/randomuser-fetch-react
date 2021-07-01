import { Box, Button, Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: `${theme.spacing(2)} 0`,
	},
	title: {
		color: theme.palette.main,
	},
}));

export default function Navbar() {
	const classes = useStyles();
	const usersStateCount = useSelector((state) => state.users.usersCount);
	const [usersCount, setUsersCount] = useState('');
	const [isCountError, setIsCountError] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		usersStateCount && setUsersCount(usersStateCount);
	}, [usersStateCount]);

	const fetchUsersButtonClickHandler = () => {
		if (usersCount < 1) {
			setIsCountError('Значение меньше 0');
		} else {
			setIsCountError('');
			dispatch(fetchUsers(usersCount));
		}
	};

	return (
		<div className={classes.root}>
			<Grid
				container
				direction='column'
				justify='center'
				alignItems='flex-start'
			>
				<Box component='h1' color='primary.main'>
					Загрузить пользователей
				</Box>
				<Grid
					container
					direction='row'
					justify='flex-start'
					alignItems='center'
				>
					<Box component='span' p={1}>
						<TextField
							error={isCountError ? true : false}
							label='Количество'
							color='primary'
							type='number'
							size='small'
							value={usersCount}
							onChange={(e) => setUsersCount(e.target.value)}
							helperText={isCountError}
						/>
					</Box>
					<Box component='span' p={1}>
						<Button
							variant='contained'
							color='primary'
							onClick={fetchUsersButtonClickHandler}
						>
							Загрузить
						</Button>
					</Box>
					<Box component='span' p={1}>
						<Button color='secondary'>Фильтры</Button>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
}
