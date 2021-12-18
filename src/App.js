import React, { useEffect, useReducer } from 'react';
import socketClient from 'socket.io-client';

import OrderList from './Components/Order';
import orderService from './Service/order';
import { AppWrapper, AppBody, Banner, OrderSearch, Label, Splash, Salad } from './styles.js';


const ENDPOINT = "http://127.0.0.1:4000";

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
    console.log(e.target.value);
    dispatch({ type: 'search', payload: e.target.value });
  }

  const handleSetData = (data) => {
    dispatch({ type: 'order', payload: data });
  };

  useEffect(() => {
    const socket = socketClient(ENDPOINT);
    socket.on("order_event", handleSetData);
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
          {state.order && state.search === '' && <OrderList order={state.order} data-testid="order"></OrderList>}
          {state.order && state.search !== '' && <OrderList order={state.filteredOrder}></OrderList>}
        </AppBody>
      </AppWrapper>
      <Salad></Salad>
    </>
  );
}

export default App;
