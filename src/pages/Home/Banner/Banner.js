import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import Carousels from '../Carousels/Carousels';

const Banner = () => {
    return (
        <div>
            <Navigation />
            <div className=" d-md-block">
                <Carousels />
            </div>
        </div>
    );
};

export default Banner;