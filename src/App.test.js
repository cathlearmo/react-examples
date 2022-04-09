import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const fetchDemoLink = screen.getByText(/Fetch demo/i);
  expect(fetchDemoLink).toBeInTheDocument();
});
