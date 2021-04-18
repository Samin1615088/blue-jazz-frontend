import React from 'react';
import './TestimonialCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const TestimonialCard = ({ testimonial }) => {

    return (
        <div className="col">
            <div className="card-container card h-100 testimonial-card-container">
                <div className="text-center">
                    <img src={testimonial.profilePic || "https://dummyimage.com/200x200/000/ff0048&text=Image+Not+Available"} className="img-fluid rounded-3" alt="..." />
                </div>

                <div className="card-body">
                    <h4 className="card-title fw-bold text-uppercase">{testimonial.userName}</h4>
                    <p className="card-text">{testimonial.msg}</p>
                </div>
                <footer className="card-footer d-flex justify-content-start">
                    <FontAwesomeIcon className="ms-2" icon={faStar} />
                    <FontAwesomeIcon className="ms-2" icon={faStar} />
                    <FontAwesomeIcon className="ms-2" icon={faStar} />
                    <FontAwesomeIcon className="ms-2" icon={faStar} />
                    <FontAwesomeIcon className="ms-2" icon={faStar} />
                </footer>
            </div>
        </div>
    );
};

export default TestimonialCard;