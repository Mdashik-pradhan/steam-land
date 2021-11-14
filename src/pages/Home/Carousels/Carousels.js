import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Carousel.css';
import { useHistory } from 'react-router';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 1
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 1
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

const Carousels = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push('/product');
    }

    return (
        <div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={window.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={100}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={window.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                <div className="">
                    <div className="banner-carousel-item">
                        <div className = "Overlay my-auto  d-flex justify-content-center align-items-center" >
                            <div className="carousel-text">
                                <h1 className="brand-text-color-3">SILVER STAR IRON</h1>
                                <p className="text-light">Recessed Thumb Switch for Steam that cannot get knocked loose like earlier models. Heat Shield for your hands keeps them cooler than with earlier models without any barrrier.</p>
                                <button onClick={handleClick} className="carousel-button mt-5">EXPLORE MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="banner-carousel-item-2">
                        <div className="Overlay d-flex justify-content-center align-items-center">
                            <div className="carousel-text">
                                <h1> <span className="brand-text-color-4">Steam Iron</span> For Your Home</h1>
                                <p>A steam iron is the best way to give your clothes a professionally pressed look and feel from the comfort of your home. The steam from the iron moistens the fibers of your clothes and makes them easier to press. Not only this, but the steam also helps keep the fibers in place for a longer duration.</p>
                                <button onClick={handleClick} className="carousel-button mt-5">EXPLORE MORE</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="banner-carousel-item-3">
                        <div className="Overlay d-flex justify-content-center align-items-center">
                            <div className="carousel-text">
                                <h1> <span className="brand-text-color-3">Industrial</span> Steam Iron</h1>
                                <p>We are a leading Manufacturer of Steam Iron such as Electric Steam Iron, Portable Steam Iron, Steam Iron with Bottle and Steam Buster Iron from Bangladesh.</p>
                                <button onClick={handleClick} className="carousel-button mt-5">EXPLORE MORE</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Carousels;