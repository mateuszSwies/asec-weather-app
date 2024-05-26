import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { createContext, useEffect, useState } from 'react';
import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from 'react-native-paper';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { City } from '@/typings';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import Loader from '@/components/Loader';
import { styles } from './styles';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

type CityContextType = {
	selectedCity?: City;
	setSelectedCity: React.Dispatch<React.SetStateAction<City | undefined>>;
};

export const CityContext = createContext<CityContextType>({
	selectedCity: { name: '', lat: 0, lon: 0, country: '', state: '' },
	setSelectedCity: () => {},
});

const RootLayout = () => {
	const [selectedCity, setSelectedCity] = useState<City>();
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
			<CityContext.Provider value={{ selectedCity, setSelectedCity }}>
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
			</CityContext.Provider>
		</QueryClientProvider>
	);
};

export default RootLayout;
