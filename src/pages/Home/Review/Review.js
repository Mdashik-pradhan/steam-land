import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import './Review.css';

const Review = ({review}) => {
    const {name, profession, description, ratings, img} = review;
    return (
        <div class="mt-5 mb-5 pb-5" >
            <div className="">
                <h2><span className="brand-text-color-1 text-center mb-4">Consumer </span>Says About Us</h2>
            </div>
                <div className="review p-3">
                    <div className="text-center">
                        <img className="review-img" src={img} alt="" />
                    </div>
                    <div className="review-text-container text-center mt-2">
                        <h4>{name}</h4>
                        <h6>{profession}</h6>
                        <p>{description}</p>
                        <Rating
                        name="text-feedback"
                        value={ratings}
                        readOnly
                        precision={1}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        /> <br />
                    </div>
                </div>
        </div>
    );
};

export default Review;