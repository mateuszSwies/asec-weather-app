import { City } from '@/typings';
import { create } from 'zustand';

type SelectedCityStore = {
	selectedCity?: City | null;
	setSelectedCity: (newCity: City) => void;
};

const initialState = {
	selectedCity: null,
};

export const useSelectedCityStore = create<SelectedCityStore>((set) => ({
	...initialState,
	setSelectedCity: (newCity) => set(() => ({ selectedCity: newCity })),
}));
