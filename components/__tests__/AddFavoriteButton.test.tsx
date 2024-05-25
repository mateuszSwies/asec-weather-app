import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import AddFavoriteButton from '../AddFavoriteButton/AddFavoriteButton';

describe('AddFavoriteButton', () => {
	test('renders correctly', () => {
		const { getByLabelText } = render(
			<AddFavoriteButton onFavoriteButtonPress={() => {}} />
		);
		const button = getByLabelText('Favorites');
		expect(button).toBeDefined();
	});

	test('calls onFavoriteButtonPress when button is pressed', () => {
		const onFavoriteButtonPress = jest.fn();
		const { getByLabelText } = render(
			<AddFavoriteButton onFavoriteButtonPress={onFavoriteButtonPress} />
		);
		const button = getByLabelText('Favorites');
		act(() => {
			fireEvent.press(button);
		});
		expect(onFavoriteButtonPress).toHaveBeenCalled();
	});
});
