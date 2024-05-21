import { View, Text, FlatList, ScrollView } from 'react-native';
import { Searchbar, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CityListElement from '@/components/CityListElement/CityListElement';
import { City } from '@/typings';
import { getUniqueCities } from '@/utils/getUniqueCities';

const HomeScreen = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [cityArray, setCityArray] = useState<City[]>([]);
	const [finalQuery, setFinalQuery] = useState('');
	const [loadingData, setLoadingData] = useState(false);

	const cityUrl = (query: string) =>
		`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}`;

	// const cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=10b23f10ab27a1c43faeeac2631be3c9`;
	// const cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${finalQuery}&limit=5&appid=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}`;

	const fetchCity = async (query: string) => {
		try {
			setLoadingData(true);
			const response = await axios.get(cityUrl(query));
			if (response.status === 200) {
				const uniqueCities = getUniqueCities(response.data);
				setCityArray(uniqueCities);
			} else {
				console.log(response.status);
			}
		} catch (error) {
			console.error('Error fetching city data:', error);
		} finally {
			setLoadingData(false);
		}
	};

	const onSubmitSearch = () => {
		setFinalQuery(searchQuery);
	};

	useEffect(() => {
		if (finalQuery) {
			fetchCity(finalQuery);
		}
	}, [finalQuery]);

	return (
		<View
			style={{
				flex: 1,
				paddingBottom: 70,
			}}
		>
			<Searchbar
				mode="view"
				placeholder="Check weather in your city"
				onChangeText={setSearchQuery}
				value={searchQuery}
				onIconPress={onSubmitSearch}
				onSubmitEditing={onSubmitSearch}
			/>
			{loadingData && (
				<ActivityIndicator
					animating={true}
					size={'large'}
				/>
			)}
			{cityArray.length !== 0 && (
				<View>
					<FlatList
						data={cityArray}
						renderItem={({ item }) => (
							<CityListElement
								name={item.name}
								country={item.country}
								lat={item.lat}
								lon={item.lon}
								state={item.state}
							/>
						)}
						keyExtractor={(_, index) => String(index)}
					/>
				</View>
			)}
		</View>
	);
};
export default HomeScreen;
