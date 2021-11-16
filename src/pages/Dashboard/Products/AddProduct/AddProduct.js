import React, { useState } from 'react';
import {
    TextField,
    TextareaAutosize
} from '@mui/material';
import './addProduct.css';

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const [buttonToggle, setButtonToggle] = useState(true);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...product};
        newProduct[field] = value;
        setProduct(newProduct);

    }
    console.log(product)

    const handleSubmit = e => {
        fetch('https://hidden-sea-41707.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data) {
                alert('successful');
                setButtonToggle(false);
                e.target.value = ''
            }
            setTimeout(function () {
                setButtonToggle(true);
            }, 1000);
        })



        e.preventDefault();
    }

    return (
        <div>
            <h2>Add a Product</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                onBlur={handleOnBlur}
                name="title"
                sx={{width: '75%', m:1}}
                label="Product Title"
                id="outlined-size-small"
                size="small"
                />
                <TextareaAutosize
                onBlur={handleOnBlur}
                name="list_1"
                style={{ width: '75%', margin:'.5rem', padding: '12px' }}
                aria-label="minimum height"
                minRows={3}
                minCols={12}
                placeholder="Description list 1"
                />
                <TextareaAutosize
                onBlur={handleOnBlur}
                name="list_2"
                style={{ width: '75%', margin:'.5rem', padding: '12px' }}
                aria-label="minimum height"
                minRows={3}
                minCols={12}
                placeholder="Description list 2"
                />
                <TextareaAutosize
                onBlur={handleOnBlur}
                name="list_3"
                style={{ width: '75%', margin:'.5rem', padding: '12px' }}
                aria-label="minimum height"
                minRows={3}
                minCols={12}
                placeholder="Description list 3"
                />
                <TextareaAutosize
                onBlur={handleOnBlur}
                name="list_4"
                style={{ width: '75%', margin:'.5rem', padding: '12px' }}
                aria-label="minimum height"
                minRows={3}
                minCols={12}
                placeholder="Description list 4"
                />
                <TextareaAutosize
                onBlur={handleOnBlur}
                name="list_5"
                style={{ width: '75%', margin:'.5rem', padding: '12px' }}
                aria-label="minimum height"
                minRows={3}
                minCols={12}
                placeholder="Description list 4"
                />
                <TextField
                onBlur={handleOnBlur}
                name="ratings"
                sx={{width: '75%', m:1}}
                label="Ratings"
                id="outlined-size-small"
                size="small"
                type="number"
                />
                <TextField
                onBlur={handleOnBlur}
                name="img"
                sx={{width: '75%', m:1}}
                label="Image Url"
                id="outlined-size-small"
                size="small"
                />
                <TextField
                onBlur={handleOnBlur}
                name="price"
                sx={{width: '75%', m:1}}
                label="Price"
                id="outlined-size-small"
                size="small"
                type="number"
                />
                <TextField
                onBlur={handleOnBlur}
                name="discount"
                sx={{width: '75%', m:1}}
                label="Discount Percentage"
                id="outlined-size-small"
                size="small"
                />
                <br />
                <button  type="submit" className="add-product-button mt-5">{buttonToggle === true ? 'Add Product': 'Product Added'}</button>
            </form>
        </div>
    );
};

export default AddProduct;