import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
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
	pagination: {
		padding: 12,
	},
	columnWithButton: {
		'& button': {
			marginLeft: 16,
		},
	},
}));
