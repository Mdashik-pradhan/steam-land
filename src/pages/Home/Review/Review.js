import React from 'react';
import './Review.css';

const Review = ({review}) => {
    const {name, profession, description, ratings, img} = review;
    return (
        <div class="" >
                <div className="review p-3">
                    <div className="text-center">
                        <img className="review-img" src={img} alt="" />
                    </div>
                    <div className="review-text-container text-center mt-2">
                        <h4>{name}</h4>
                        <h6>{profession}</h6>
                        <p>{description}</p>
                        <p>{ratings}</p>
                    </div>
                </div>
        </div>
    );
};

export default Review;