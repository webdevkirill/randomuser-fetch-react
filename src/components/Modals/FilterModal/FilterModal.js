import {
	Checkbox,
	Dialog,
	DialogTitle,
	ListItem,
	ListItemIcon,
	ListItemText,
	List,
	DialogContent,
	Typography,
	TextField,
	DialogActions,
	Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import { filtersFromUsers } from '../../../utils';
import { useStyles } from './FilterModalClasses';

export default function FilterModal({ open, onClose, users }) {
	const filters = filtersFromUsers(users);

	const [checked, setChecked] = useState({ name: [], gender: [], email: [] });
	const [nameValue, setNameValue] = useState('');
	const [genderValue, setGenderValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const inputsHelper = {
		name: {
			value: nameValue,
			handler(value) {
				setNameValue(value);
			},
		},
		gender: {
			value: genderValue,
			handler(value) {
				setGenderValue(value);
			},
		},
		email: {
			value: emailValue,
			handler(value) {
				setEmailValue(value);
			},
		},
	};

	const handleToggle = (field, value) => () => {
		const currentIndex = checked[field].indexOf(value);
		const newChecked = JSON.parse(JSON.stringify(checked));

		if (currentIndex === -1) {
			newChecked[field].push(value);
		} else {
			newChecked[field].splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	const classes = useStyles();
	return (
		<Dialog
			onClose={() => onClose(null)}
			aria-labelledby='simple-dialog-title'
			open={open}
		>
			<DialogTitle id='simple-dialog-title'>Выберите фильтры</DialogTitle>
			<DialogContent dividers={true}>
				<div className={classes.filters}>
					{['name', 'gender', 'email'].map((field) => {
						return (
							<div key={field}>
								<Typography
									variant='subtitle2'
									className={classes.filterTitle}
									gutterBottom
								>
									{filters[field].title}
								</Typography>
								<TextField
									label={filters[field].title}
									type='text'
									variant='outlined'
									value={inputsHelper[field].value}
									onChange={(e) =>
										inputsHelper[field].handler(
											e.target.value
										)
									}
								/>
								<List className={classes.root}>
									{filters[field].values
										.filter(
											(value) =>
												value
													.toLowerCase()
													.indexOf(
														inputsHelper[field]
															.value
													) !== -1
										)
										.map((value, idx) => {
											const labelId = `checkbox-list-label-${idx}`;
											return (
												<ListItem
													key={labelId}
													role={undefined}
													dense
													button
													onClick={handleToggle(
														field,
														value
													)}
												>
													<ListItemIcon>
														<Checkbox
															edge='start'
															checked={
																checked[
																	field
																].indexOf(
																	value
																) !== -1
															}
															tabIndex={-1}
															disableRipple
															inputProps={{
																'aria-labelledby':
																	labelId,
															}}
														/>
													</ListItemIcon>
													<ListItemText
														id={labelId}
														primary={value}
													/>
												</ListItem>
											);
										})}
								</List>
							</div>
						);
					})}
				</div>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => onClose(checked)} color='primary'>
					Сохранить
				</Button>
			</DialogActions>
		</Dialog>
	);
}
