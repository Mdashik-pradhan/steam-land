import React, { useState} from 'react';
import {
    TextField,
    TextareaAutosize
} from '@mui/material';
import Rating from '@mui/material/Rating';

const UserReviews = () => {
    const [review, setReview] = useState({});
     const [values, setValues] = React.useState(3);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        const ratings = values
        newReview[field] = value;
        newReview['ratings'] = ratings;
        setReview(newReview);

    }
    console.log(review)

    const handleSubmit = e => {
        fetch('https://hidden-sea-41707.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data) {
                alert('successful');
                e.target.value = ''
            }
        })



        e.preventDefault();
    }
    return (
        <div>
            <h2>Add a Review</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                onBlur={handleOnBlur}
                name="name"
                sx={{width: '75%', m:1}}
                label="Name"
                id="outlined-size-small"
                size="small"
                />
                <TextField
                onBlur={handleOnBlur}
                name="profession"
                sx={{width: '75%', m:1}}
                label="Profession"
                id="outlined-size-small"
                size="small"
                />
                <TextField
                onBlur={handleOnBlur}
                name="img"
                sx={{width: '75%', m:1}}
                label="Image URL"
                id="outlined-size-small"
                size="small"
                />
                <TextareaAutosize
                onBlur={handleOnBlur}
                name="description"
                style={{ width: '75%', margin:'.5rem', padding: '12px' }}
                aria-label="minimum height"
                minRows={3}
                minCols={12}
                placeholder="Description..."
                /> <br />
                <span className="fs-4">Quality</span>
                &nbsp; &nbsp;
                <Rating
                name="simple-controlled"
                value={values}
                onChange={(event, newValue) => {
                setValues(newValue);
                }}
                />
                <br />
                <button  type="submit" className="add-review-button mt-5">Add Review</button>
            </form>
        </div>
    );
};

export default UserReviews;