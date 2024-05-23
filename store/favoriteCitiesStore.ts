import { AsyncKeys } from '@/constants';
import { City } from '@/typings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

type FavoriteCitiesStore = {
	favoriteCities: City[];
	checkFavoriteCities: () => Promise<void>;
	addFavoriteCity: (city: City) => Promise<void>;
	removeFavoriteCity: (cityToRemove: City) => Promise<void>;
};

const initialState = {
	favoriteCities: [],
};

export const useFavoriteCitiesStore = create<FavoriteCitiesStore>((set) => ({
	...initialState,
	checkFavoriteCities: async () => {
		try {
			const savedCities = await AsyncStorage.getItem(AsyncKeys.SAVED_CITIES);
			const citiesArray = savedCities ? JSON.parse(savedCities) : [];
			set({ favoriteCities: citiesArray });
		} catch (error) {
			console.error('Error reading favorite cities:', error);
			set({ favoriteCities: [] });
		}
	},
	addFavoriteCity: async (city) => {
		try {
			const savedCities = await AsyncStorage.getItem(AsyncKeys.SAVED_CITIES);
			const citiesArray = savedCities ? JSON.parse(savedCities) : [];
			const existingCityIndex = citiesArray.findIndex(
				(c: City) =>
					c.name === city.name &&
					c.country === city.country &&
					c.lat === city.lat &&
					c.lon === city.lon
			);
			if (existingCityIndex === -1) {
				citiesArray.push(city);
				await AsyncStorage.setItem(
					AsyncKeys.SAVED_CITIES,
					JSON.stringify(citiesArray)
				);
				set({ favoriteCities: citiesArray });
			}
		} catch (error) {
			console.error('Error adding favorite city:', error);
		}
	},
	removeFavoriteCity: async (cityToRemove: City) => {
		try {
			const savedCities = await AsyncStorage.getItem(AsyncKeys.SAVED_CITIES);
			const citiesArray = savedCities ? JSON.parse(savedCities) : [];
			const updatedCities = citiesArray.filter(
				(city: City) =>
					city.name !== cityToRemove.name ||
					city.country !== cityToRemove.country ||
					city.lat !== cityToRemove.lat ||
					city.lon !== cityToRemove.lon
			);
			await AsyncStorage.setItem(
				AsyncKeys.SAVED_CITIES,
				JSON.stringify(updatedCities)
			);
			set({ favoriteCities: updatedCities });
		} catch (error) {
			console.error('Error removing favorite city:', error);
		}
	},
}));
