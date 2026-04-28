import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NitiAI home screen', () => {
  render(<App />);
  expect(screen.getByText(/NitiAI/i)).toBeInTheDocument();
});
