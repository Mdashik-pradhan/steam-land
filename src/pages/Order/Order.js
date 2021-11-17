import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import Footer from '../shared/Footer/Footer';
import Navigation from '../shared/Navigation/Navigation';
import { useParams, useHistory } from 'react-router-dom';
import './ProductDetails.css';

const Order = () => {
    const [product, setProduct] = useState([]);
    const history = useHistory();
    const { user } = useAuth();
    const {_id} = useParams();

    const handleRedirect = () => {
        history.push(`/payment`);
    }

    useEffect(() => {
        const url = `https://hidden-sea-41707.herokuapp.com/products/${_id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://hidden-sea-41707.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({data, email: user.email, product, orderStatus: 'Pending'})
        })
        .then(res => res.json())
        .then(data => {
            handleRedirect();
        })
    };
    return (
        <div>
            <Navigation />
            <h2 className="mt-5 text-center">Your Information <span className="brand-text-color-3"> Please</span>!</h2>
            <div className="container order-form-container d-flex justify-content-center text-center">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5 mb-5 w-50 ">
                    <input type="name" defaultValue={user?.displayName} {...register("name")} placeholder="Name"/> <br />
                    <input type="email" defaultValue={user?.email} {...register("email", { required: true })}  placeholder="Email"/> <br />
                    <input type="phone" defaultValue={user?.phone} {...register("phone", { required: true })}  placeholder="Phone"/> <br />
                    <input type="address" defaultValue={user?.address} {...register("address", { required: true })}  placeholder="Address"/> <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <button type="submit" className="order-button" >Order Now</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Order;