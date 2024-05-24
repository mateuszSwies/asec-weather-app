import { verticalScale } from '@/utils/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		height: '100%',
		paddingBottom: 100,
	},
	list: {
		rowGap: verticalScale(10),
		paddingBottom: 60,
	},
});
