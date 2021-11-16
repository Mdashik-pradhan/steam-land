import React from 'react';
import {useHistory} from 'react-router-dom';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const Product = ({product}) => {
    const {title,  price, img, _id, discount, ratings} = product;
    const history = useHistory();

    const handleDetails = id => {
        history.push(`/productDetails/${id}`)
    }

    return (
        <div div className = " col-sm-6 col-md-4">
            <div className="product">
                <div className="text-end">
                    <img className="product-img" src={product?.img} alt="" />
                    {product?.discount && <span className="discount-status">{`${discount}% OFF`}</span>}
                </div>
                <div className="mt-2 text-center">
                    <h5>{title}</h5>
                    <h6 className="price">BDT {price}</h6>
                    <Rating
                    name="text-feedback"
                    value={ratings}
                    readOnly
                    precision={1}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    /> <br />
                    <button onClick={() => handleDetails(_id)} className="product-button mt-4"><VisibilityRoundedIcon /> Details</button>
                    {/* <button onClick={() => handleDetails(_id)} className="buy-now"><AddShoppingCartIcon /> BUY NOW</button> */}
                </div>
            </div>
        </div>
    );
};

export default Product;