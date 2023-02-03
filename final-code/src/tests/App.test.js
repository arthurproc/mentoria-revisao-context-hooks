import { render, screen } from '@testing-library/react';
import App from '../App';
import { makeMockFetch } from './helper';


test('renders learn react link', () => {
  makeMockFetch();
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
