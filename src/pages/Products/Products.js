import React, {useState, useEffect} from 'react';
import Product from '../Product/Product';
import Footer from '../shared/Footer/Footer';
import Navigation from '../shared/Navigation/Navigation';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    return (
        <div>
            <Navigation />
            <div className="container mt-5 mb-5">
                <div className="row g-3">
                    {
                        products.map(product => <Product key={product._id} product={product} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;