import { City } from '@/typings';
import { create } from 'zustand';

type SelectedCityStore = {
	selectedCity: City;
	setSelectedCity: (newCity: City) => void;
};

const initialState = {
	selectedCity: { name: '', lat: 0, lon: 0, country: '', state: '' },
};

export const useSelectedCityStore = create<SelectedCityStore>((set) => ({
	...initialState,
	setSelectedCity: (newCity) => set(() => ({ selectedCity: newCity })),
}));
