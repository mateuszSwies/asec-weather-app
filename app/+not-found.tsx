import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { styles } from './styles';

const NotFoundScreen = () => {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<View style={styles.notFoundContainer}>
				<Text>This screen doesn't exist.</Text>
				<Link
					href="/"
					style={styles.notFoundLink}
				>
					<Text>Go to home screen!</Text>
				</Link>
			</View>
		</>
	);
};

export default NotFoundScreen;
