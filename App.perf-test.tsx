import React from 'react';
import {measurePerformance} from 'reassure';
import {screen, fireEvent} from '@testing-library/react-native';
import App from './App';

test('App', async () => {
  const scenario = async () => {
    const incrementButton = screen.getByText('increment');

    fireEvent.press(incrementButton);
    fireEvent.press(incrementButton);
    fireEvent.press(incrementButton);
    fireEvent.press(incrementButton);
    fireEvent.press(incrementButton);
    fireEvent.press(incrementButton);

    expect(screen.getByText('Count: 6')).toBeTruthy();
    expect(screen.getByText('The count is increasing')).toBeTruthy();

    const decrementButton = screen.getByText('decrement');

    fireEvent.press(decrementButton);
    fireEvent.press(decrementButton);
    fireEvent.press(decrementButton);
    fireEvent.press(decrementButton);
    fireEvent.press(decrementButton);
    fireEvent.press(decrementButton);

    expect(screen.getByText('Count: 0')).toBeTruthy();
    expect(screen.getByText('The count is decreasing')).toBeTruthy();
  };

  await measurePerformance(<App />, {scenario});
});
