import { styles } from './styles';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import WeatherLogo from '@/assets/images/cloudAndSun.svg';

type ScreenTitleProps = {
	title: string;
};

const ScreenTitle = ({ title }: ScreenTitleProps) => {
	return (
		<View style={styles.mainContainer}>
			<Card style={styles.card}>
				<Card.Content style={styles.cardContent}>
					<Text style={styles.text}>{title}</Text>
					<WeatherLogo
						width={90}
						height={90}
					/>
				</Card.Content>
			</Card>
		</View>
	);
};

export default ScreenTitle;
