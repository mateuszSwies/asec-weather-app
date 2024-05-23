import { moderateScale, verticalScale } from '@/utils/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	mainContainer: {
		height: verticalScale(100),
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
	},
	text: {
		fontSize: moderateScale(25),
		marginHorizontal: 'auto',
	},
});
