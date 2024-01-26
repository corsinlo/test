import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


jest.mock('./components/LandingPage', () => () => <div>LandingPageMock</div>);

test('renders navigation links', () => {
  render(<App />);
  expect(screen.getByText("Landing Page 1")).toBeInTheDocument();
  expect(screen.getByText("Landing Page 2")).toBeInTheDocument();
  expect(screen.getByText("Landing Page 3")).toBeInTheDocument();
});