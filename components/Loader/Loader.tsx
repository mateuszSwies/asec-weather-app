import { ActivityIndicator } from 'react-native';

const Loader = () => {
	return (
		<ActivityIndicator
			testID="activity-indicator"
			animating
			size="large"
		/>
	);
};

export default Loader;
