import React, { useState, useEffect } from 'react';
import Review from '../Review/Review';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 3
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 2
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 1
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    }
};

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/reviews`;
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data)); 
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={window.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={2000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={window.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >{
                reviews.map(review => <Review  key={review._id} review={review}/>)
            }
            </Carousel>
        </div>
    );
};

export default Reviews;