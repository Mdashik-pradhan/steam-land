import React from 'react';
import './Footer.css';
import paymentMethod from '../../../images/payment-method.jpg'
import { NavLink } from 'react-router-dom';
import brandIcon from '../../../images/brand-icon.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-4">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4 p2">
                        <div className="d-flex align-items-center mb-2">
                            <img className="brand-icon" src={brandIcon} alt="" />
                            <h1>Steam Land</h1>
                        </div>
                        <p> Level-2, 15, Mirpur Tower, Mirpur, Dhaka</p>
                        <p>Official: steam-land@steam-land.com</p>
                        <p> Helpline : 01738308375 (Available : 24/7)</p>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="email-subscribe" >
                            {/* <input type="email" name="email" placeholder="Enter Your Email"/><button>SUBSCRIBE</button> */}
                            <li style={{listStyle: 'none'}}>
                            <NavLink className="fs-5 text-light text-decoration-none" to="/" >About Us</NavLink>
                            </li>
                            <li style={{listStyle: 'none'}}>
                            <NavLink className="fs-5 text-light text-decoration-none" to="/" >Refund policy</NavLink>
                            </li>
                            <li style={{listStyle: 'none'}}>
                            <NavLink className="fs-5 text-light text-decoration-none" to="/" >Terms & Conditions</NavLink>
                            </li>
                            <li style={{listStyle: 'none'}}>
                            <NavLink className="fs-5 text-light text-decoration-none" to="/" >Privacy and Policy</NavLink>
                            </li>
                        </div>
                        <div className=" mt-3">
                            <FacebookIcon className="m-2" />
                            <InstagramIcon className="m-2" />
                            <TwitterIcon className="m-2" />
                            <LinkedInIcon className="m-2" />
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <img className="w-100 rounded" src={paymentMethod} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;