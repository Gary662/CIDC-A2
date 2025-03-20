import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name on page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Gary Simwawa/i);
  expect(nameElement).toBeInTheDocument();
});
