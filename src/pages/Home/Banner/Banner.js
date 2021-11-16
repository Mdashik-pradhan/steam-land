import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import Carousels from '../Carousels/Carousels';
import bannerMobile from '../../../images/banner-mobile-2.jpg';
import './Banner.css';
import { useHistory } from 'react-router';

const Banner = () => {
    const history = useHistory();
    
    const handleClick = () => {
        history.push(`/product`);
    }

    return (
        <div>
            <Navigation />
            <div className="d-none d-md-block">
                <Carousels />
            </div>
            <div className="d-block d-md-none mobile-banner mb-5 pb-3">
                <img className="w-100" src={bannerMobile} alt="" />
                <div className="text-center mt-5 mb-5">
                    <button onClick={handleClick} className="carousel-button">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;