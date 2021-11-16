import React, {useState, useEffect} from 'react';
import Footer from '../shared/Footer/Footer';
import Navigation from '../shared/Navigation/Navigation';
import { useParams, useHistory } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Messenger from '../shared/Messenger/Messenger';

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const {title,  price, img,} = product;
    const history = useHistory();
    const { _id } = useParams();


    useEffect(() => {
        const url = `https://hidden-sea-41707.herokuapp.com/products/${_id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    console.log(product);

    const handleDetails = id => {
        history.push(`/order/${id}`)
    }


    return (
        <div>
            <Navigation />
            <div className="container mt-5 mb-5 pt-5 pb-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img className="w-100 rounded mb-3" src={img} alt="" />
                    </div>
                    <div className="col-12 col-md-6 ps-5">
                                <h4>{title}</h4>
                        <p className="mt-3 brand-text-color-3">Be the first to review this product</p>
                        <div className="row">
                            <div className="col-6">
                            <h3><span className="fs-1 text-bold">৳</span>{price}.00</h3>
                            <h6><i class="fas fa-tag"></i></h6>
                            </div>
                            <div className="col-6">
                                <p>Unit of Measure <br /> <span className="fs-5">Price</span> <br /> Minimum Order Qty <input className="fs-5 mt-1 text-end w-50 ms-5" value="1" /></p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <p>
                                <a href="#/" className="brand-text-color-3 text-decoration-none">Notify me when this product is in stock</a>
                            </p>
                            {
                                product?.list_1 &&
                                <ul>
                                <li className=""> <p>{product?.list_1}</p></li>
                                <li className=""> <p>{product?.list_2}</p></li>
                                <li className=""> <p>{product?.list_3}</p></li>
                                <li className=""> <p>{product?.list_4}</p></li>
                                <li className=""> <p>{product?.list_5}</p></li>
                            </ul>
                            }
                        </div>
                    </div>
                    <div className="text-center">
                    <button onClick={() => handleDetails(product?._id)} className="buy-now mt-5"><AddShoppingCartIcon /> BUY NOW</button>
                    </div>
                </div>
            </div>
            <Messenger />
            <Footer />
        </div>
    );
};

export default ProductDetails;