import { View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import axios from 'axios';
import { useEffect, useLayoutEffect, useState } from 'react';
import { City } from '@/typings';
import { getUniqueCities } from '@/utils/getUniqueCities';
import { useQuery } from '@tanstack/react-query';
import ScreenTitle from '@/components/ScreenTitle';
import CityList from '@/components/CityList';
import Toast from 'react-native-toast-message';
import AddFavoriteButton from '@/components/AddFavoriteButton';
import { useFavoriteCitiesStore } from '@/store/favoriteCitiesStore';
import FavoriteModal from '@/components/FavoriteModal';
import Loader from '@/components/Loader';
import { styles } from './styles';

const cityUrl = (query: string) =>
	`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}`;

const HomeScreen = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [finalQuery, setFinalQuery] = useState('');
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { checkFavoriteCities, favoriteCities } = useFavoriteCitiesStore();

	useEffect(() => {
		const fetchData = async () => {
			await checkFavoriteCities();
		};

		fetchData();
	}, []);

	useLayoutEffect(() => {
		setIsModalVisible(false);
	}, []);

	const {
		data: cityArray,
		isLoading,
		isRefetching,
		error,
	} = useQuery({
		queryKey: ['cities', finalQuery],
		enabled: !!finalQuery,
		queryFn: () =>
			axios.get<City[]>(cityUrl(finalQuery)).then((res) => {
				const filteredCities: City[] = res.data.map((city) => ({
					name: city.name,
					lat: city.lat,
					lon: city.lon,
					country: city.country,
					state: city.state || '',
				}));

				return getUniqueCities(filteredCities);
			}),
	});

	const onSubmitSearch = () => {
		setFinalQuery(searchQuery);
	};

	const handleAddToFavorites = () => {
		setIsModalVisible(true);
	};

	const showLoading = isLoading || isRefetching;

	if (!isLoading && error) {
		Toast.show({
			type: 'error',
			text1: 'Ups..',
			text2: 'Maybe try again in a while 👋',
			position: 'bottom',
		});
	}

	return (
		<View style={styles.homeContainer}>
			<ScreenTitle
				textStyle={styles.homeScreenTitle}
				title="Your SkySpy"
			/>
			<Searchbar
				mode="view"
				placeholder="Check weather in your city"
				onChangeText={setSearchQuery}
				value={searchQuery}
				onIconPress={onSubmitSearch}
				onSubmitEditing={onSubmitSearch}
			/>
			{showLoading && <Loader />}
			{cityArray?.length === 0 && <Text>No cities available</Text>}
			{cityArray && <CityList cityArray={cityArray} />}
			<AddFavoriteButton onFavoriteButtonPress={handleAddToFavorites} />
			<FavoriteModal
				isOpen={isModalVisible}
				onDismiss={() => setIsModalVisible(false)}
				cityArray={favoriteCities}
			/>
		</View>
	);
};
export default HomeScreen;
