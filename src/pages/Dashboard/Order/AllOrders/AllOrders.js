import React, { useEffect, useState } from 'react';
import OrdersTable from '../OrdersTable/OrdersTable';

const AllOrders = () => {
    const [orders, setOrders ] = useState([]);

    useEffect(() => {
        const url = `https://hidden-sea-41707.herokuapp.com/orders`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);

    return (
        <div>
            <OrdersTable orders={orders}/>
        </div>
    );
};

export default AllOrders;