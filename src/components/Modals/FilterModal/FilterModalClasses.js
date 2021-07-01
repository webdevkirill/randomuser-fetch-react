import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxHeight: 300,
		overflow: 'auto',
	},
	filters: {
		marginTop: 16,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	filter: {
		maxWidth: 360,
		difplay: 'flex',
		flexDirection: 'column',
		marginBottom: 32,
	},
	filterInput: {
		marginBottom: 12,
	},
}));
