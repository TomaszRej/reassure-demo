import React from 'react';
import {measurePerformance} from 'reassure';
import {screen, fireEvent} from '@testing-library/react-native';
import App from './App';

test('App', async () => {
  const scenario = async () => {
    fireEvent.press(screen.getByText('increment'));
    fireEvent.press(screen.getByText('increment'));
    fireEvent.press(screen.getByText('increment'));
    fireEvent.press(screen.getByText('increment'));
    fireEvent.press(screen.getByText('increment'));
    fireEvent.press(screen.getByText('increment'));

    expect(screen.getByText('Count: 6')).toBeTruthy();
    expect(screen.getByText('The count is increasing')).toBeTruthy();

    fireEvent.press(screen.getByText('decrement'));
    fireEvent.press(screen.getByText('decrement'));
    fireEvent.press(screen.getByText('decrement'));
    fireEvent.press(screen.getByText('decrement'));
    fireEvent.press(screen.getByText('decrement'));
    fireEvent.press(screen.getByText('decrement'));

    expect(screen.getByText('Count: 0')).toBeTruthy();
    expect(screen.getByText('The count is decreasing')).toBeTruthy();
  };

  await measurePerformance(<App />, {scenario});
});
