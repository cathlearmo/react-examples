import { render, screen } from '@testing-library/react';
import App from './App';

test('renders side nav links', () => {
  render(<App />);
  const fetchDemoLink = screen.getByText(/Fetch demo/i);
  expect(fetchDemoLink).toBeInTheDocument();
  const tableDemoLink = screen.getByText(/Table demo/i);
  expect(tableDemoLink).toBeInTheDocument();
});

