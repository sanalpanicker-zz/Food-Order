import order from '../order';

const previousMockOrderData = [
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

const incomingMockOrderData = [
    {
        "customer": "Carla Garner",
        "destination": "61109 Alan Motorway, North Corey, CA 92789",
        "event_name": "COOKED",
        "id": "d0791ce1",
        "item": "Caesar salad",
        "price": 4692,
        "sent_at_second": 6
    },
    {
        "customer": "Elizabeth Shepherd",
        "destination": "923 Nicholas Trafficway, North Kyle, CA 95616",
        "event_name": "COOKED",
        "id": "53e869ef",
        "item": "Chicken pad thai",
        "price": 4314,
        "sent_at_second": 10
    },
]

test('Banner should be rendered', () => {
    const search = '';
    const { orders, filteredOrders } = order.updateOrder(incomingMockOrderData, previousMockOrderData, search);
    expect(orders.length).toBe(2);
    expect(filteredOrders.length).toBe(2);
});
