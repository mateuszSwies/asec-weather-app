import { ActivityIndicator, Text, View } from 'react-native';
import axios from 'axios';
import { useContext } from 'react';
import { CityContext } from '@/app/_layout';
import { CityWeather } from '@/typings';
import { useQuery } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { styles } from '@/app/(tabs)/weather-style';
import ScreenTitle from '@/components/ScreenTitle';
import CityWeatherCard from '@/components/CityWeatherCard';

const Weather = () => {
	const { selectedCity } = useContext(CityContext);

	const { name, lat, lon } = selectedCity || {};

	const weatherForSelectedCityUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&units=metric`;

	const weatherIconForSelectedCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}`;

	const {
		data: weatherData,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['weatherData'],
		queryFn: () =>
			axios.get<CityWeather>(weatherForSelectedCityUrl).then((res) => res.data),
	});
	const { data: weatherIconCode, isLoading: isWeatherCodeLoading } = useQuery({
		queryKey: ['additionalWeatherData'],
		queryFn: () =>
			axios
				.get(weatherIconForSelectedCityUrl)
				.then((res) => res.data.weather[0].icon),
	});

	if (!isLoading && error) {
		Toast.show({
			type: 'error',
			text1: 'Ups..',
			text2: 'Maybe try again in a while 👋',
			position: 'bottom',
		});
	}

	if (!selectedCity) {
		return (
			<View style={styles.noCityContainer}>
				<Text style={styles.noCityText}>
					You didn't choose any city. Go back to the home page and search for
					any.
				</Text>
			</View>
		);
	}

	if (isLoading || isWeatherCodeLoading) {
		return (
			<ActivityIndicator
				animating
				size="large"
			/>
		);
	}

	return (
		<View style={styles.container}>
			<ScreenTitle
				weatherCode={weatherIconCode}
				textStyle={styles.titleText}
				title={`Current weather in ${name}`}
			/>
			{selectedCity && <CityWeatherCard weatherData={weatherData} />}
		</View>
	);
};

export default Weather;
