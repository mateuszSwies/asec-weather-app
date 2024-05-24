import { View, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Text, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStyles } from './styles';

const CityWeatherCard = ({ weatherData }: any) => {
	const theme = useTheme();
	const styles = createStyles(theme);
	const {
		main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
		weather,
		wind: { speed, gust },
		clouds: { all: cloudiness },
		sys: { sunrise, sunset },
		name,
		visibility,
	} = weatherData;

	const formatTime = (timestamp: any) => {
		const date = new Date(timestamp * 1000);
		return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.location}>{name}</Text>
				<Text style={styles.temp}>{temp}°C</Text>
				<Text style={styles.weather}>{weather[0].description}</Text>
			</View>
			<View style={styles.grid}>
				<Card style={styles.card}>
					<Card.Content>
						<MaterialCommunityIcons
							name="thermometer"
							size={32}
							color="#000"
						/>
						<Title>Feels Like</Title>
						<Paragraph>{feels_like}°C</Paragraph>
					</Card.Content>
				</Card>
				<Card style={styles.card}>
					<Card.Content>
						<MaterialCommunityIcons
							name="thermometer-minus"
							size={32}
							color="#000"
						/>
						<Title>Min Temp</Title>
						<Paragraph>{temp_min}°C</Paragraph>
					</Card.Content>
				</Card>
				<Card style={styles.card}>
					<Card.Content>
						<MaterialCommunityIcons
							name="thermometer-plus"
							size={32}
							color="#000"
						/>
						<Title>Max Temp</Title>
						<Paragraph>{temp_max}°C</Paragraph>
					</Card.Content>
				</Card>
				<Card style={styles.card}>
					<Card.Content>
						<MaterialCommunityIcons
							name="water-percent"
							size={32}
							color="#000"
						/>
						<Title>Humidity</Title>
						<Paragraph>{humidity}%</Paragraph>
					</Card.Content>
				</Card>
				<Card style={styles.card}>
					<Card.Content>
						<MaterialCommunityIcons
							name="gauge"
							size={32}
							color="#000"
						/>
						<Title>Pressure</Title>
						<Paragraph>{pressure} hPa</Paragraph>
					</Card.Content>
				</Card>
				<Card style={styles.card}>
					<Card.Content>
						<MaterialCommunityIcons
							name="weather-cloudy"
							size={32}
							color="#000"
						/>
						<Title>Cloudiness</Title>
						<Paragraph>{cloudiness}%</Paragraph>
					</Card.Content>
				</Card>
				<Card style={styles.card}>
					<Card.Content>
						<MaterialCommunityIcons
							name="weather-windy"
							size={32}
							color="#000"
						/>
						<Title>Wind Speed</Title>
						<Paragraph>{speed} m/s</Paragraph>
						<Paragraph>Gusts: {gust} m/s</Paragraph>
					</Card.Content>
				</Card>
				<Card style={styles.card}>
					<Card.Content>
						<MaterialCommunityIcons
							name="weather-sunset-up"
							size={32}
							color="#000"
						/>
						<Title>Sunrise</Title>
						<Paragraph>{formatTime(sunrise)}</Paragraph>
						<MaterialCommunityIcons
							name="weather-sunset-down"
							size={32}
							color="#000"
						/>
						<Title>Sunset</Title>
						<Paragraph>{formatTime(sunset)}</Paragraph>
					</Card.Content>
				</Card>
				<Card style={styles.card}>
					<Card.Content>
						<MaterialCommunityIcons
							name="eye"
							size={32}
							color="#000"
						/>
						<Title>Visibility</Title>
						<Paragraph>{visibility} m</Paragraph>
					</Card.Content>
				</Card>
			</View>
		</ScrollView>
	);
};

export default CityWeatherCard;
