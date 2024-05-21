export type City = {
	name: string;
	lat: number;
	lon: number;
	country: string;
	state?: string;
};

export type ShortWeatherInfo = {
	main: string;
	desc: string;
	icon: string;
	id: number;
};

export type MainWeatherInfo = {
	temp: number;
	feelsLike: number;
	tempMin: number;
	tempMax: number;
	pressure: number;
	humidity: number;
	seaLevel: number;
	groundLevel: number;
};

export type WindInfo = {
	speed: number;
	deg: number;
	gust: number;
};

export type CityWeather = {
	weather: ShortWeatherInfo[];
	main: MainWeatherInfo;
	wind: WindInfo;
	// rain: {[key as string]: number}
};
