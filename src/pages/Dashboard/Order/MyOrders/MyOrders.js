import React,{ useState, useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyOrdersTable from '../MyOrdersTable/MyOrdersTable';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://hidden-sea-41707.herokuapp.com/orders?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);

    // delete order 
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://hidden-sea-41707.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders);
                }
            });
        }
    }

    return (
        <div>
            <MyOrdersTable orders={orders} handleDelete={handleDelete}/>
        </div>
    );
};

export default MyOrders;