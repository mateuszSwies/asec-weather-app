import { City } from '@/typings';

export const getUniqueCities = (data: City[]) => {
	const uniqueCities: City[] = data.reduce((acc: City[], current: City) => {
		const exists = acc.find(
			(item) =>
				item.name === current.name &&
				item.country === current.country &&
				item.state === current.state
		);
		if (!exists) {
			acc.push(current);
		}
		return acc;
	}, []);
	return uniqueCities;
};
