import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from './userModalClasses';

export default function UserModal({ user = {}, onClose, open }) {
	const { name, img, email, age, gender } = user;
	const classes = useStyles();

	return (
		<Dialog
			onClose={onClose}
			aria-labelledby='simple-dialog-title'
			open={open}
		>
			<DialogTitle id='simple-dialog-title'>{name}</DialogTitle>
			<DialogContent>
				<div className={classes.root}>
					<img
						className={classes.img}
						src={img}
						alt={`Avatar - ${name}`}
					/>
					<div className={classes.text}>
						<Typography
							className={classes.paragraph}
							variant='body1'
							gutterBottom
						>
							Email: {email}
						</Typography>
						<Typography
							className={classes.paragraph}
							variant='body1'
							gutterBottom
						>
							Возраст: {age}
						</Typography>
						<Typography
							className={classes.paragraph}
							variant='body1'
							gutterBottom
						>
							Пол: {gender}
						</Typography>
					</div>
				</div>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color='primary'>
					Закрыть
				</Button>
			</DialogActions>
		</Dialog>
	);
}
