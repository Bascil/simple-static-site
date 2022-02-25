import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('render text in components', () => {
  render(<App />);
  expect(screen.getByText('Air Quality')).toBeInTheDocument();
});
