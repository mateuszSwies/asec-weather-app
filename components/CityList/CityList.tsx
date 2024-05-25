import CityListElement from '@/components/CityListElement';
import { useFavoriteCitiesStore } from '@/store/favoriteCitiesStore';
import { City } from '@/typings';
import { FlatList, View } from 'react-native';
import { styles } from './styles';

type CityListProps = {
	cityArray: City[];
};

const CityList = ({ cityArray }: CityListProps) => {
	const { addFavoriteCity, removeFavoriteCity } =
		useFavoriteCitiesStore() || {};

	return (
		<View style={styles.container}>
			<FlatList
				data={cityArray}
				contentContainerStyle={styles.list}
				renderItem={({ item }) => (
					<CityListElement
						city={item}
						handleAddToFavorites={addFavoriteCity}
						handleRemoveFromFavorites={removeFavoriteCity}
					/>
				)}
				keyExtractor={(_, index) => String(index)}
			/>
		</View>
	);
};

export default CityList;
