import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from 'react-native-paper';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import Loader from '@/components/Loader';
import { styles } from './styles';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const queryClient = new QueryClient();

	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	const theme = { ...DefaultTheme };

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return <Loader />;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<PaperProvider theme={theme}>
				<SafeAreaView style={styles.container}>
					<Stack>
						<Stack.Screen
							name="(tabs)"
							options={{ headerShown: false }}
						/>
						<Stack.Screen name="+not-found" />
					</Stack>
					<Toast />
				</SafeAreaView>
			</PaperProvider>
		</QueryClientProvider>
	);
};

export default RootLayout;
