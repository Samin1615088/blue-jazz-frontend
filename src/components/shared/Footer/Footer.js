import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faSnapchatSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-container text-dark pt-5 pb-4">
            <div className="container text-center text-mid-start">
                <div className="row text-center text-mid-start">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-info">About Us</h5>
                        <hr className="mb-4" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sequi quod natus dicta ullam provident quaerat aut fuga id, voluptatibus nulla sit ut voluptate accusamus modi, rem ad totam sapiente.</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-info">Let Us Help</h5>
                        <hr className="mb-4" />
                        <p>
                            <a href="#" className="text-dark" style={{ textDecoration: "none" }}>Help</a>
                        </p>
                        <p>
                            <a href="#" className="text-dark" style={{ textDecoration: "none" }}>FeedBack</a>
                        </p>
                        <p>
                            <a href="#" className="text-dark" style={{ textDecoration: "none" }}>Email Us</a>
                        </p>
                        <p>
                            <a href="#" className="text-dark" style={{ textDecoration: "none" }}>Any Enquiry</a>
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-info">Special Services</h5>
                        <hr className="mb-4" />
                        <div className="">
                            <p>
                                <a href="#" className="text-dark" style={{ textDecoration: "none" }}>Be Our VIP Customer</a>
                            </p>
                            <p>
                                <a href="#" className="text-dark" style={{ textDecoration: "none" }}>Get Coupon</a>
                            </p>
                            <p>
                                <a href="#" className="text-dark" style={{ textDecoration: "none" }}>Get Membership</a>
                            </p>
                            <p>
                                <a href="#" className="text-dark" style={{ textDecoration: "none" }}>Book For Private Party</a>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-info">Social Handles</h5>
                        <hr className="mb-4" />
                        <div className="text-end">

                            <p>
                                <a href="#" className="text-dark" style={{ textDecoration: "none" }}>
                                Facebook
                                    <FontAwesomeIcon className="ms-2" size="lg" icon={faFacebookSquare} />
                            </a>
                            </p>
                            <p>
                                <a href="#" className="text-dark" style={{ textDecoration: "none" }}>
                                Instagram
                                    <FontAwesomeIcon className="ms-2" size="lg" icon={faInstagramSquare} />
                            </a>
                            </p>
                            <p>
                                <a href="#" className="text-dark" style={{ textDecoration: "none" }}>
                                Twitter
                                    <FontAwesomeIcon className="ms-2" icon={faTwitterSquare} />
                            </a>
                            </p>
                            <p>
                                <a href="#" className="text-dark" style={{ textDecoration: "none" }}>
                                SnapChat
                                    <FontAwesomeIcon className="ms-2" icon={faSnapchatSquare} />
                            </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;