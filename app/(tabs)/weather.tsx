import { ActivityIndicator, Text, View } from 'react-native';
import axios from 'axios';
import { useContext } from 'react';
import { CityContext } from '@/app/_layout';
import { CityWeather } from '@/typings';
import { useQuery } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

const Weather = () => {
	const { selectedCity } = useContext(CityContext);

	const { name, lat, lon, country, state } = selectedCity || {};

	const weatherForSelectedCityUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&units=metric`;

	const {
		data: weatherData,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['weatherData'],
		queryFn: () =>
			axios.get<CityWeather>(weatherForSelectedCityUrl).then((res) => res.data),
	});

	if (!isLoading && error) {
		Toast.show({
			type: 'error',
			text1: 'Ups..',
			text2: 'Maybe try again in a while 👋',
			position: 'bottom',
		});
	}

	if (!selectedCity && !isLoading) {
		return (
			<View>
				<Text>You didn't choose any city</Text>
			</View>
		);
	}

	if (isLoading) {
		return (
			<ActivityIndicator
				animating={true}
				size={'large'}
			/>
		);
	}

	return (
		<View>
			{selectedCity && (
				<View>
					<Text>Weather for {name || ''}:</Text>
					{weatherData && (
						<Text>Today is: {weatherData?.main?.temp} *Celsius</Text>
					)}
				</View>
			)}
			{!selectedCity && (
				<Text>
					It seems that something has gone wrong. Choose a city once again
				</Text>
			)}
		</View>
	);
};

export default Weather;
