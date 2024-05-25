import React from 'react';
import { render } from '@testing-library/react-native';
import ScreenTitle from '../ScreenTitle/ScreenTitle';

describe('ScreenTitle', () => {
	test('renders correctly with title', () => {
		const { getByText } = render(<ScreenTitle title="Test Title" />);
		const titleElement = getByText('Test Title');
		expect(titleElement).toBeDefined();
	});

	test('renders correctly with custom text style', () => {
		const customStyle = { color: 'red' };
		const { getByText } = render(
			<ScreenTitle
				title="Test Title"
				textStyle={customStyle}
			/>
		);
		const titleElement = getByText('Test Title');
		expect(titleElement.props.style).toContain(customStyle);
	});

	test('renders weather icon when weatherCode is provided', () => {
		const { getByTestId } = render(
			<ScreenTitle
				title="Test Title"
				weatherCode="01d"
			/>
		);
		const weatherIcon = getByTestId('weather-icon');
		expect(weatherIcon).toBeDefined();
	});

	test('renders default weather logo when weatherCode is not provided', () => {
		const { queryByTestId } = render(<ScreenTitle title="Test Title" />);
		const weatherIcon = queryByTestId('weather-icon');
		expect(weatherIcon).toBeNull();
	});
});
