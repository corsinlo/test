import React from 'react';
import { render, screen } from '@testing-library/react';
import Description from './index';

test('renders the description text', () => {
  render(<Description text="Test Description" />);
  expect(screen.getByText("Test Description")).toBeInTheDocument();
});
