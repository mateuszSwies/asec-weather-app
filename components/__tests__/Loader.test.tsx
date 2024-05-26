import React from 'react';
import { render } from '@testing-library/react-native';
import Loader from '../Loader';

test('it renders ActivityIndicator with correct props', () => {
	const { getByTestId } = render(<Loader />);

	const activityIndicator = getByTestId('activity-indicator');

	expect(activityIndicator).toBeTruthy();
	expect(activityIndicator.props.animating).toBe(true);
	expect(activityIndicator.props.size).toBe('large');
});
