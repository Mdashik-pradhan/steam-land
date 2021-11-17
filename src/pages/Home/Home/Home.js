import Footer from '../../shared/Footer/Footer';
import Banner from '../Banner/Banner';
import OfferProducts from '../OfferProducts/OfferProducts';
import Reviews from '../Reviews/Reviews';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Messenger from '../../shared/Messenger/Messenger';
import Blog from '../../Blog/Blog';
import './Home.css';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const Home = () => {
    const {isLoading} = useAuth();
    if(isLoading){ return <CircularProgress className="home-loading" />} 
    return (
        <home>
            <div className="d-none d-lg-block">
                <button className="product-cart d-flex justify-content-between">
                    <AddShoppingCartIcon />
                    <h6>ITEM 0</h6>
                </button>
            </div>
            
            <Banner />
            <OfferProducts />
            <Reviews />
            <Blog />
            <Messenger />
            <Footer />
        </home>
    );
};

export default Home;