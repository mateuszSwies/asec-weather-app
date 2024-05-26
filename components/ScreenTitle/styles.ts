import { moderateScale, verticalScale } from '@/utils/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	mainContainer: {
		maxHeight: verticalScale(90),
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	card: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
	},
	cardContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '100%',
	},
	text: {
		fontSize: moderateScale(25),
		marginHorizontal: 'auto',
		flex: 1,
	},
	avatarStyles: {
		backgroundColor: 'lightgrey',
	},
});
