import TabBarIcon from '@/components/navigation/TabBarIcon';
import { Tabs } from 'expo-router';
import { useTheme } from 'react-native-paper';

export default function TabLayout() {
	const theme = useTheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: theme.colors.primary,
				headerShown: false,
				tabBarLabelStyle: { fontSize: 16 },
				tabBarStyle: {
					height: 70,
				},
				tabBarHideOnKeyboard: true,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							name={focused ? 'home' : 'home-outline'}
							color={focused ? theme.colors.primary : 'black'}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="weather"
				options={{
					title: 'Weather',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							name={focused ? 'sunny' : 'sunny-outline'}
							color={focused ? theme.colors.primary : 'black'}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
