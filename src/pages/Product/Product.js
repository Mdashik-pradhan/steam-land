import React from 'react';
import {useHistory} from 'react-router-dom';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = ({product}) => {
    const {title,  price, img, _id, discount} = product;
    const history = useHistory();

    const handleDetails = id => {
        history.push(`/order/${id}`)
    }
    return (
        <div div className = " col-sm-6 col-md-4">
            <div className="product">
                <div className="text-end">
                    <img className="product-img" src={product?.img} alt="" />
                    {product?.discount && <span className="discount-status">{`${discount}% OFF`}</span>}
                </div>
                <div className="mt-2">
                    <h5>{title}</h5>
                    <h6 className="price">{price}</h6>
                    <button onClick={() => handleDetails(_id)} className="product-button mt-4"><VisibilityRoundedIcon /> Details</button>
                    <button onClick={() => handleDetails(_id)} className="buy-now"><AddShoppingCartIcon /> BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Product;