import { horizontalScale, moderateScale } from '@/utils/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	weatherNoCityContainer: {
		marginTop: 140,
	},
	weatherNoCityText: {
		fontSize: moderateScale(20),
		textAlign: 'center',
	},
	weatherContainer: {
		flex: 1,
	},
	weatherTitleText: {
		fontSize: moderateScale(20),
		textAlign: 'center',
		marginRight: 10,
	},
	homeContainer: {
		flex: 1,
		paddingBottom: 70,
	},
	homeScreenTitle: {
		marginLeft: 60,
	},
	homeNoCitiesContainer: {
		height: '70%',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		paddingHorizontal: horizontalScale(15),
	},
	homeNoCitiesText: {
		fontSize: moderateScale(22),
		textAlign: 'center',
	},
});
