import { styles } from './styles';
import { FAB } from 'react-native-paper';

type AddFavoriteButtonProps = {
	onFavoriteButtonPress: () => void;
};

const AddFavoriteButton = ({
	onFavoriteButtonPress,
}: AddFavoriteButtonProps) => {
	return (
		<FAB
			icon="heart"
			style={styles.fab}
			label="Favorites"
			onPress={onFavoriteButtonPress}
		/>
	);
};

export default AddFavoriteButton;
