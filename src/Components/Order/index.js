
import React from 'react';
import Chip from '../Chip'
import Avatar from '../Avatar'
import { Table, Header, Row, Cell, Body } from './styles.js';

const OrderList = ({ order }) => (
    <Table data-testid="order-table">
        <Header>
            <Row>
                <Cell width={'20%'}>Customer</Cell>
                <Cell width={'30%'}>Address</Cell>
                <Cell width={'20%'}>Menu</Cell>
                <Cell width={'10%'}>Price</Cell>
                <Cell width={'20%'} align="center">Status</Cell>
            </Row>
        </Header>
        <Body>
            {order.map((dataItem) => (<Row key={dataItem.id}>
                <Cell width={'20%'} align="left"><Avatar character={dataItem.customer.charAt(0)} />{dataItem.customer}</Cell>
                <Cell width={'30%'}>{dataItem.destination}</Cell>
                <Cell width={'20%'}>{dataItem.item}</Cell>
                <Cell width={'10%'}>${dataItem.price / 100}</Cell>
                <Cell width={'20%'} align="center"><Chip status={dataItem.event_name}></Chip></Cell>
            </Row>))}
        </Body>
    </Table>
);

export default OrderList;