import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	img: {
		width: 72,
		height: 72,
		marginRight: 16,
	},
	text: {
		display: 'flex',
		flexDirection: 'column',
	},
	paragraph: {
		marginBottom: 8,
	},
}));
