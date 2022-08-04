import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Counter from './Counter';

describe('Counter', () => {
  it('should render correct initial count value', () => {
    render(<Counter count={0} />);
    expect(screen.getByText('Count: 0')).toBeTruthy();
  });

  it('should correctly update count value and trend text', () => {
    const {rerender} = render(<Counter count={0} />);

    expect(screen.getByText('Count: 0')).toBeTruthy();

    rerender(<Counter count={1} />);

    expect(screen.getByText('Count: 1')).toBeTruthy();
    expect(screen.getByText('The count is increasing')).toBeTruthy();

    rerender(<Counter count={0} />);

    expect(screen.getByText('Count: 0')).toBeTruthy();
    expect(screen.getByText('The count is decreasing')).toBeTruthy();
  });
});
