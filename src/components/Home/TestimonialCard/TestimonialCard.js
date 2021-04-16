import React from 'react';
import './TestimonialCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const TestimonialCard = ({ userTestimonialData }) => {

    return (
        <div className="col">
            <div className="card-container card h-100 testimonial-card-container">
                <img src="https://dummyimage.com/600x400/000/fff" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title fw-bold text-uppercase">{userTestimonialData.userName}</h4>
                    <p className="card-text">{userTestimonialData.msg}</p>
                </div>
                <footer className="card-footer d-flex justify-content-start">
                    <FontAwesomeIcon className="ms-2" icon={faStar} />
                    <FontAwesomeIcon className="ms-2" icon={faStar} />
                    <FontAwesomeIcon className="ms-2" icon={faStar} />
                </footer>
            </div>
        </div>
    );
};

export default TestimonialCard;