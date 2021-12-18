
const updateOrder = (incomingData, previousData, search) => {
    const newOrders = [];
    incomingData.forEach((incomingItem) => {
        const index = previousData.findIndex((prevItem) => {
            return prevItem.id === incomingItem.id;
        }
        );
        if (index !== -1) {
            previousData[index] = incomingItem;
        } else {
            newOrders.push(incomingItem);
        }
    });
    const orders = [...newOrders, ...previousData];
    const filteredOrders = orders.filter(_matchPrice(search));
    return { orders, filteredOrders };
}

/**
 * Create Regex to match the string that start with search parameter
 * @param {string} search 
 * @returns 
 */
const _matchRegex = (search) => new RegExp(`^${search}`);

/**
 * Return a boolean if the price matches to search string
 * @param {string} search 
 * @returns {boolean}
 */
const _matchPrice = (search) => (order) => _matchRegex(search).test(order.price);

//TODO: extensible for a wide variety of filters
// const _matchCustomer = (search) => (order) => _matchRegex(search).test(order.customer);
// const _matchDestination = (search) => (order) => _matchRegex(search).test(order.destination);
// const _matchItem = (search) => (order) => _matchRegex(search).test(order.item);

module.exports = {
    updateOrder
}