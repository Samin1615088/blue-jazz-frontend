import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonial.scss';

const usersTestimonialsData = [
    { userName: "Rahim", msg: "I loved their services", profilePic: "", rating: 3 },
    { userName: "Rahim", msg: "I loved their services", profilePic: "", rating: 3 },
    { userName: "Rahim", msg: "I loved their services", profilePic: "", rating: 3 }
];

const Testimonial = () => {
    return (
        <section className="testimonial-container vh-100  d-flex flex-column justify-content-center">

            <div className="container h-75 text-center">
                <h2 className="display-5 fw-light text-light pb-2">Our Happy Customers Feedback</h2>

                <div className=" row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {
                        usersTestimonialsData.map((userTestimonialData, index) => <TestimonialCard key={index} userTestimonialData={userTestimonialData} />)
                    }

                </div>
            </div>

        </section>
    );
};

export default Testimonial;