import { render, screen } from '@testing-library/react';
import App from './App';

const mockOrderData = [
  {
    "customer": "Carla Garner",
    "destination": "61109 Alan Motorway, North Corey, CA 92789",
    "event_name": "CREATED",
    "id": "d0791ce1",
    "item": "Caesar salad",
    "price": 4692,
    "sent_at_second": 6
  },
  {
    "customer": "Elizabeth Shepherd",
    "destination": "923 Nicholas Trafficway, North Kyle, CA 95616",
    "event_name": "CREATED",
    "id": "53e869ef",
    "item": "Chicken pad thai",
    "price": 4314,
    "sent_at_second": 10
  },
]

jest.mock("./Service/connection", () => ({
  getOrderData: (callback) => callback(mockOrderData)
}));

test('Banner should be rendered', () => {
  render(<App />);
  const bannerComponent = screen.getByTestId("banner");
  expect(bannerComponent).toBeInTheDocument();
});

test('Search should be rendered', () => {
  render(<App />);
  const searchComponent = screen.getByTestId("search");
  expect(searchComponent).toBeInTheDocument();
});

test('Order table should be rendered', () => {
  render(<App />);
  const orderTableComponent = screen.getByTestId("order-table");
  expect(orderTableComponent).toBeInTheDocument();
});
