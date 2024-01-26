import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './index';


test('displays loading initially', () => {
  render(
      <LandingPage />
  );
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});


