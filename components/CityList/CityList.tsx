import CityListElement from '@/components/CityListElement';
import { City } from '@/typings';
import { FlatList, View } from 'react-native';

type CityListProps = {
	cityArray: City[];
	handleAddToFavorite: (favCity: City) => Promise<void>;
	handleRemoveFromFavorites: (favCity: City) => Promise<void>;
};

const CityList = ({
	cityArray,
	handleAddToFavorite,
	handleRemoveFromFavorites,
}: CityListProps) => {
	return (
		<View>
			<FlatList
				data={cityArray}
				renderItem={({ item }) => (
					<CityListElement
						city={item}
						handleAddToFavorites={handleAddToFavorite}
						handleRemoveFromFavorites={handleRemoveFromFavorites}
					/>
				)}
				keyExtractor={(_, index) => String(index)}
			/>
		</View>
	);
};

export default CityList;
