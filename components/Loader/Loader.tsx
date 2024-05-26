import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';

const Loader = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator
				testID="activity-indicator"
				animating
				size="large"
			/>
		</View>
	);
};

export default Loader;
