import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './OfferProducts.css';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const OfferProducts = () => {
    const [products, setProducts] = useState([]);
    const history = useHistory();
    const handleClick = () => {
        history.push(`/product`);
    }

    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDetails = id => {
        history.push(`/order/${id}`)
    }

    return (
        <div className="container mt-5">
            <div className="row g-3">
                {
                    products.map(product => ((

                    <div div className="col-sm-6 col-md-4">
                        <div className="product">
                            <div className="text-end">
                                <img className="product-img" src={product?.img} alt="" />
                                {product?.discount && <span className="discount-status">{`${product.discount}% OFF`}</span>}
                            </div>
                            <div className="text-center">
                                <h5>{product?.title}</h5>
                                <h6 className="price">{product?.price}</h6>
                                <button onClick={() => handleDetails(product?._id)} className="product-button mt-4"><VisibilityRoundedIcon /> Details</button>
                                <button onClick={() => handleDetails(product?._id)} className="buy-now"><AddShoppingCartIcon /> BUY NOW</button>
                            </div>
                        </div>
                    </div>

                    )))
                }
            </div>
            <div className="text-center mt-5 mb-5">
                <button onClick={handleClick} className="carousel-button">Explore More</button>
            </div>
        </div>
    );
};

export default OfferProducts;