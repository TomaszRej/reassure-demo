import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  it('should correctly update count value when on of the buttons is clicked', () => {
    render(<App />);

    expect(screen.findByText('Count: 0')).toBeTruthy();

    fireEvent.press(screen.getByText('increment'));
    fireEvent.press(screen.getByText('increment'));
    fireEvent.press(screen.getByText('increment'));

    expect(screen.getByText('Count: 3')).toBeTruthy();
    expect(screen.getByText('The count is increasing')).toBeTruthy();

    fireEvent.press(screen.getByText('decrement'));
    fireEvent.press(screen.getByText('decrement'));
    fireEvent.press(screen.getByText('decrement'));

    expect(screen.getByText('Count: 0')).toBeTruthy();
    expect(screen.getByText('The count is decreasing')).toBeTruthy();
  });
});
