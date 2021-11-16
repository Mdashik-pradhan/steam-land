import React, { useEffect, useState } from 'react';
import ProductsTable from '../ProductsTable/ProductsTable';

const ProductsMaintain = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://hidden-sea-41707.herokuapp.com/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    // delete product 
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://hidden-sea-41707.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }
            });
    }
}

    return (
        <div>
            <ProductsTable products={products} handleDelete={handleDelete}/>
        </div>
    );
};

export default ProductsMaintain;