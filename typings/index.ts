export type City = {
	name: string;
	lat: number;
	lon: number;
	country: string;
	state?: string;
};

export type ShortWeatherInfo = {
	main: string;
	description: string;
	icon: string;
	id: number;
};

export type MainWeatherInfo = {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
	seaLevel?: number;
	groundLevel?: number;
};

export type WindInfo = {
	speed: number;
	gust: number;
	deg?: number;
};

export type CityWeather = {
	weather: ShortWeatherInfo[];
	main: MainWeatherInfo;
	wind: WindInfo;
	clouds: { all: number };
	sys: { sunrise: number; sunset: number };
	name: string;
	visibility: number;
};
