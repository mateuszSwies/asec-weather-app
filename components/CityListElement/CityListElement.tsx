import { CityContext } from '@/app/_layout';
import { City } from '@/typings';
import { Link } from 'expo-router';
import { useContext } from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const CityListElement = ({ lat, lon, name, country, state }: City) => {
	const { setSelectedCity, selectedCity } = useContext(CityContext);

	const handleAddToFavorite = () => {
		console.log(selectedCity);
	};

	const handleCheckWeather = () => {
		setSelectedCity({ name, country, lon, lat, state });
	};

	return (
		<Card>
			<Card.Title
				title={name}
				subtitle={`${country}, ${state}`}
				// left={LeftContent}
			/>
			{/* <Card.Content>
				<Text variant="bodyMedium">{lat}</Text>
				<Text variant="bodyMedium">{lon}</Text>
			</Card.Content> */}
			{/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
			<Card.Actions>
				<Button onPress={handleAddToFavorite}>Add to favorites</Button>
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
