import React, { useState } from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const useStyles = makeStyles((theme) => ({
	root: {
		overflow: 'visible',
		marginTop: 32,
		border: '1px solid #000',
		borderRadius: 5,
		display: 'inline-block',
		margin: '0 auto',
		width: '100%',
	},
	scroll: {
		overflow: 'auto',
	},
	header: {
		display: 'flex',
	},
	column: {
		padding: 12,
		borderRight: '1px solid #000',
		borderBottom: '1px solid #000',
		display: 'flex',
		alignItems: 'center',
	},
	columnIcon: {
		padding: 2,
	},
	row: {
		display: 'flex',
	},
}));

export default function TableComponent({
	columns,
	rows,
	countOnPage,
	deleteUserHandler,
}) {
	const classes = useStyles();
	const [page, setPage] = useState(1);

	const maxWidth = columns.reduce((acc, col) => acc + col.width + 25, 104);

	return (
		<div className={classes.root} style={{ maxWidth }}>
			<div className={classes.scroll}>
				<div className={classes.header}>
					{columns.map((column, idx) => (
						<div
							key={idx}
							className={classes.column}
							style={{ minWidth: column.width }}
						>
							{column.headerName}
						</div>
					))}
				</div>
				{rows.map((row, idx) => (
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
		</div>
	);
}
