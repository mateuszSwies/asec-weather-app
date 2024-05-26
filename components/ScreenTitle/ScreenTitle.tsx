import { styles } from './styles';
import { TextStyle, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import WeatherLogo from '@/assets/images/cloudAndSun.svg';

type ScreenTitleProps = {
	title: string;
	textStyle?: TextStyle;
	weatherCode?: string;
};

const ScreenTitle = ({ title, textStyle, weatherCode }: ScreenTitleProps) => {
	const renderIcon = () => {
		if (weatherCode) {
			return (
				<Avatar.Image
					size={90}
					source={{
						uri: `https://openweathermap.org/img/wn/${weatherCode}@2x.png`,
					}}
					style={styles.avatarStyles}
				/>
			);
		}
		return (
			<WeatherLogo
				width={90}
				height={90}
			/>
		);
	};

	return (
		<View style={styles.mainContainer}>
			<Card style={styles.card}>
				<Card.Content style={styles.cardContent}>
					<Text style={[styles.text, textStyle && textStyle]}>{title}</Text>
					{renderIcon()}
				</Card.Content>
			</Card>
		</View>
	);
};

export default ScreenTitle;
