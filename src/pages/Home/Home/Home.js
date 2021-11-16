import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from '../Banner/Banner';
import OfferProducts from '../OfferProducts/OfferProducts';
import Reviews from '../Reviews/Reviews';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Messenger from '../../shared/Messenger/Messenger';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Home = () => {
    return (
        <home>
            <button className="product-cart d-flex justify-content-between">
                <AddShoppingCartIcon />
                <h6>ITEM 0</h6>
            </button>
            <Messenger />
            <Banner />
            <OfferProducts />
            <Reviews />
            <Footer />
            <Parallax pages={2} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
                offset={0}
                speed={2.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>Scroll down</p>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

            <ParallaxLayer
                offset={1}
                speed={0.5}
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                }}>
                <p>up</p>
            </ParallaxLayer>
            </Parallax>
        </home>
    );
};

export default Home;