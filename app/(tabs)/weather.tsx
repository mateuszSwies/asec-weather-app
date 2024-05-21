import { ActivityIndicator, Text, View } from 'react-native';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CityContext } from '@/app/_layout';
import { CityWeather } from '@/typings';

const Weather = () => {
	const [weatherData, setWeatherData] = useState<CityWeather>();
	const [loadingData, setLoadingData] = useState(false);

	const { selectedCity } = useContext(CityContext);

	const { name, lat, lon, country, state } = selectedCity!;

	const weatherForSelectedCityUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&units=metric`;

	const fetchWeather = async () => {
		try {
			setLoadingData(true);
			const response = await axios.get(weatherForSelectedCityUrl);
			if (response.status === 200) {
				setWeatherData(response.data);
			} else {
				console.log(response.status);
			}
		} catch (error) {
			console.error('Error fetching weather data:', error);
		} finally {
			setLoadingData(false);
		}
	};

	useEffect(() => {
		fetchWeather();
	}, [selectedCity]);

	if (loadingData) {
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
					<Text>Weather for {name}:</Text>
					{weatherData && (
						<Text>Today is: {weatherData?.main?.temp} *Celsius</Text>
					)}
				</View>
			)}
			{!selectedCity && <Text>some error witch selecting city occured</Text>}
		</View>
	);
};

export default Weather;
