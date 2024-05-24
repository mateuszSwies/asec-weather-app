import {
	horizontalScale,
	moderateScale,
	verticalScale,
} from '@/utils/dimensions';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	animatedContainer: {
		width: width,
		height: height,
		marginTop: verticalScale(50),
		backgroundColor: 'white',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		width: '100%',
		paddingBottom: 100,
	},
	headerContent: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 'auto',
		alignItems: 'center',
		paddingHorizontal: horizontalScale(20),
		marginBottom: verticalScale(20),
	},
	button: {
		marginLeft: 'auto',
	},
	text: {
		fontSize: moderateScale(16),
		marginLeft: horizontalScale(15),
		fontWeight: 'bold',
	},
});
