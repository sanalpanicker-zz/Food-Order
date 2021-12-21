import React from 'react';
import { CounterChip } from './styles'
const Counter = ({ count }) => {
    return <CounterChip>{count}</CounterChip>;
}

export default Counter;