import React from 'react';
import { render } from '@testing-library/react-native';
import CityList from '../CityList/CityList';

// Mocking the useFavoriteCitiesStore hook
jest.mock('@/store/favoriteCitiesStore', () => ({
	useFavoriteCitiesStore: () => ({
		addFavoriteCity: jest.fn(),
		removeFavoriteCity: jest.fn(),
	}),
}));

describe('CityList', () => {
	test('renders correctly', () => {
		const cityArray = [
			{ name: 'City 1', lat: 1, lon: 2, country: 'Country 1' },
			{ name: 'City 2', lat: 3, lon: 4, country: 'Country 2' },
			{ name: 'City 3', lat: 5, lon: 6, country: 'Country 3' },
		];

		const { getByTestId } = render(<CityList cityArray={cityArray} />);
		const cityList = getByTestId('city-list');
		expect(cityList).toBeDefined();
	});

	// Add more test cases if needed
});
