import { render, screen } from '@testing-library/react';
import App from './App';

test('Banner should be rendered', () => {
  render(<App />);
  const bannerComponent = screen.getByTestId("banner");
  expect(bannerComponent).toBeInTheDocument();
});

test('Order component should be rendered', () => {
  render(<App />);
  const orderComponent = screen.getByTestId("order");
  expect(orderComponent).toBeInTheDocument();
});
