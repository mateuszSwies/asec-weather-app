import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			padding: 10,
			backgroundColor: `${theme.colors.secondaryContainer}`,
		},
		header: {
			alignItems: 'center',
			marginBottom: 20,
		},
		location: {
			fontSize: 24,
			fontWeight: 'bold',
		},
		temp: {
			fontSize: 48,
			fontWeight: 'bold',
			marginVertical: 10,
		},
		weather: {
			fontSize: 18,
			fontStyle: 'italic',
		},
		grid: {
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-between',
		},
		card: {
			width: '48%',
			marginVertical: 10,
			backgroundColor: '#ffffff',
		},
	});
