import React, { useState } from 'react';
import { Button, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './TableClasses';

export default function TableComponent({
	columns,
	rows,
	countOnPage,
	deleteUserHandler,
	sortHandler,
	wasSorted,
	filters,
}) {
	const classes = useStyles();

	const [page, setPage] = useState(1);
	const rowsCount = rows.length;
	const pagesCount =
		rowsCount % countOnPage === 0
			? rowsCount / countOnPage
			: Math.trunc(rowsCount / countOnPage) + 1;

	const maxWidth = columns.reduce((acc, col) => acc + col.width + 25, 104);

	console.log(filters);

	return (
		<div className={classes.root} style={{ maxWidth }}>
			<div className={classes.scroll}>
				<div className={classes.header}>
					{columns.map((column, idx) => (
						<div
							key={idx}
							className={`${classes.column} ${
								column.isSortable && classes.columnWithButton
							}`}
							style={{ minWidth: column.width }}
						>
							{column.headerName}
							{column.isSortable && (
								<Button
									variant='outlined'
									color='primary'
									onClick={() => {
										sortHandler(column.field);
									}}
								>
									{wasSorted
										? 'По умолчанию'
										: 'По возрастанию'}
								</Button>
							)}
						</div>
					))}
				</div>
				{rows
					.filter(
						(row, idx) =>
							idx < page * countOnPage &&
							idx >= (page - 1) * countOnPage
					)
					.map((row, idx) => (
						<div key={idx} className={classes.row}>
							{columns.map(({ width, field }, i) => (
								<div
									key={i}
									className={classes.column}
									style={{ minWidth: width }}
								>
									{row[field]}
								</div>
							))}
							<div className={classes.columnIcon}>
								<IconButton
									color='secondary'
									onClick={() => deleteUserHandler(row.id)}
								>
									<DeleteIcon />
								</IconButton>
							</div>
							<div className={classes.columnIcon}>
								<IconButton color='primary'>
									<OpenInNewIcon />
								</IconButton>
							</div>
						</div>
					))}
			</div>
			<div className={classes.pagination}>
				<Typography>Страница: {page}</Typography>
				<Pagination
					count={pagesCount}
					page={page}
					onChange={(event, value) => {
						setPage(value);
					}}
				/>
			</div>
		</div>
	);
}
