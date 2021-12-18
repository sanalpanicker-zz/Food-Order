import React from 'react';
import { StatusChip } from './styles'
const Chip = ({ status }) => {

    const chipConfig = {
        DRIVER_RECEIVED: { text: 'On the way', color: '#2c9dce' },
        COOKED: { text: 'Cooked', color: '#Ae8f13' },
        DELIVERED: { text: 'Delivered', color: '#1ea966' },
        CREATED: { text: 'Created', color: '#21232c' },
        CANCELLED: { text: 'Cancelled', color: '#c6394a' },
    }[status];

    return <StatusChip config={chipConfig}>{chipConfig.text}</StatusChip>;
}

export default Chip;