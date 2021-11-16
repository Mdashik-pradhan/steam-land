import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import './Payment.css';

const Payment = () => {
    const {user} = useAuth();
    return (
        <div>
            <Navigation />
                <div className="payment-method-bg text-center text-light pt-5">
                   <h1>Dear, <span className="brand-text-color-3">{user.displayName}</span></h1>
                    <h4>We Are Working On Payment Method...</h4>
                </div>
            <Footer />
        </div>
    );
};

export default Payment;