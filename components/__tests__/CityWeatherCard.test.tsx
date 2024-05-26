import React from 'react';
import { render } from '@testing-library/react-native';
import CityWeatherCard from '../CityWeatherCard';
import { CityWeather } from '@/typings';

const mockWeatherData: CityWeather = {
	main: {
		temp: 25,
		feels_like: 27,
		temp_min: 20,
		temp_max: 30,
		humidity: 80,
		pressure: 1012,
	},
	weather: [
		{
			description: 'clear sky',
			icon: '01d',
			main: 'aa',
			id: 1,
		},
	],
	wind: {
		speed: 5,
		gust: 10,
	},
	clouds: {
		all: 10,
	},
	sys: {
		sunrise: 1618317047,
		sunset: 1618363447,
	},
	name: 'Test City',
	visibility: 10000,
};

describe('CityWeatherCard', () => {
	it('renders weather data correctly', () => {
		const { getByText } = render(
			<CityWeatherCard weatherData={mockWeatherData} />
		);

		expect(getByText('Test City')).toBeTruthy();
		expect(getByText('25°C')).toBeTruthy();
		expect(getByText('clear sky')).toBeTruthy();

		expect(getByText('Feels Like')).toBeTruthy();
		expect(getByText('27°C')).toBeTruthy();
		expect(getByText('Min Temp')).toBeTruthy();
		expect(getByText('20°C')).toBeTruthy();
		expect(getByText('Max Temp')).toBeTruthy();
		expect(getByText('30°C')).toBeTruthy();
		expect(getByText('Humidity')).toBeTruthy();
		expect(getByText('80%')).toBeTruthy();
		expect(getByText('Pressure')).toBeTruthy();
		expect(getByText('1012 hPa')).toBeTruthy();
		expect(getByText('Cloudiness')).toBeTruthy();
		expect(getByText('10%')).toBeTruthy();
		expect(getByText('Wind Speed')).toBeTruthy();
		expect(getByText('5 m/s')).toBeTruthy();
		expect(getByText('Gusts: 10 m/s')).toBeTruthy();
		expect(getByText('Sunrise')).toBeTruthy();

		const sunriseRegex = /6:04|14:30/;
		const sunsetRegex = /19:04|3:24/;

		expect(getByText(sunriseRegex)).toBeTruthy();
		expect(getByText('Sunset')).toBeTruthy();
		expect(getByText(sunsetRegex)).toBeTruthy();
		expect(getByText('Visibility')).toBeTruthy();
		expect(getByText('10000 m')).toBeTruthy();
	});
});
