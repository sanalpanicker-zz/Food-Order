import React, { useEffect, useReducer } from 'react';

import OrderList from './Components/Order';
import orderService from './Service/order';
import connection from './Service/connection';
import { AppWrapper, AppBody, Banner, OrderSearch, Label, Splash, Salad } from './styles.js';

const initialState = {
  order: [],
  filteredOrder: [],
  search: '',
};

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case 'order': {
      const { orders, filteredOrders } = orderService.updateOrder(action.payload, state.order, state.search);
      newState = { ...state, order: orders, filteredOrder: filteredOrders };
      break;
    }
    case 'search': {
      const { filteredOrders } = orderService.updateOrder(state.order, state.order, state.search);
      newState = { ...state, filteredOrder: filteredOrders, search: action.payload };
      break;
    }
    default:
      throw new Error();
  }
  return newState;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearch = (e) => {
    dispatch({ type: 'search', payload: e.target.value });
  }

  const handleSetData = (data) => {
    dispatch({ type: 'order', payload: data });
  };

  useEffect(() => {
    connection.getOrderData(handleSetData);
  }, [])

  return (
    <>
      <Splash></Splash>
      <AppWrapper>
        <AppBody>
          <Banner data-testid="banner">
            <Label>Your Order's</Label>
            <OrderSearch handleSearch={handleSearch} />
          </Banner>
          {state.order && state.search === '' && <OrderList order={state.order}></OrderList>}
          {state.order && state.search !== '' && <OrderList order={state.filteredOrder}></OrderList>}
        </AppBody>
      </AppWrapper>
      <Salad></Salad>
    </>
  );
}

export default App;
