import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Steam Land</h1>
                    </div>
                    <div className="col-md-4">
                        <div className="email-subscribe" >
                            <input type="email" name="email" placeholder="Enter Your Email"/><button>SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;