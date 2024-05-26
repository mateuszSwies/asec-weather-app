import { CityContext } from '@/app/_layout';
import { useFavoriteCitiesStore } from '@/store/favoriteCitiesStore';
import { City } from '@/typings';
import { Link } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Button, Card, Text } from 'react-native-paper';

type CityListElementProps = {
	city: City;
	onAddToFavorites: (favCity: City) => Promise<void>;
	onRemoveFromFavorites: (favCity: City) => Promise<void>;
};

const CityListElement = ({
	city,
	onAddToFavorites,
	onRemoveFromFavorites,
}: CityListElementProps) => {
	const { setSelectedCity } = useContext(CityContext);
	const [isLoading, setIsLoading] = useState(false);

	const { checkFavoriteCities, favoriteCities } = useFavoriteCitiesStore();

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			await checkFavoriteCities();
		};
		fetchData();
		setIsLoading(false);
	}, []);

	const { name, country, state, lon, lat } = city;

	const handleFavoritePress = async () => {
		isAlreadyInFavorites
			? await onRemoveFromFavorites(city)
			: await onAddToFavorites(city);
	};

	const handleCheckWeather = () => {
		setSelectedCity({ ...city });
	};

	const isAlreadyInFavorites = favoriteCities.some(
		(city) =>
			city.country === country &&
			city.name === name &&
			city.lat === lat &&
			city.lon === lon
	);

	if (isLoading) {
		return <ActivityIndicator size="large" />;
	}

	return (
		<Card>
			<Card.Title
				title={name}
				subtitle={`${country}, ${state}`}
			/>
			<Card.Actions>
				<Button onPress={handleFavoritePress}>
					{isAlreadyInFavorites ? 'Remove from favorites' : 'Add to favorites'}
				</Button>
				<Link
					href="/weather"
					asChild
				>
					<Button onPress={handleCheckWeather}>Check weather</Button>
				</Link>
			</Card.Actions>
		</Card>
	);
};

export default CityListElement;
