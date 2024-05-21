import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

const TabBarIcon = ({
	...rest
}: IconProps<ComponentProps<typeof Ionicons>['name']>) => {
	return (
		<Ionicons
			size={38}
			style={{ marginBottom: -3 }}
			{...rest}
		/>
	);
};

export default TabBarIcon;
