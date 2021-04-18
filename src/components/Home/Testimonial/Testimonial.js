import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonial.scss';

// const usersTestimonialsData = [
//     { userName: "Rahim", msg: "I loved their services", profilePic: "", rating: 3 },
//     { userName: "Rahim", msg: "I loved their services", profilePic: "", rating: 3 },
//     { userName: "Rahim", msg: "I loved their services", profilePic: "", rating: 3 }
// ];

const Testimonial = () => {

    const [allTestimonials, setAllTestimonials] = useState([]);

    //get all Testimonials from server>>
    useEffect(() => {
        fetch(`https://aqueous-earth-48070.herokuapp.com/allTestimonials`)
            .then(response => response.json())
            .then(data => {
                setAllTestimonials(data);
                console.log('get testimonial', data[3].profilePic);
            })
            .catch(error => console.log(error))
    }, []);
    //get all products from server<<

    return (
        <section className="testimonial-container vh-100  d-flex flex-column justify-content-center">

            <div className="container h-75 text-center">
                <h2 className="display-5 fw-light text-light pb-2">Our Happy Customers Feedback</h2>

                <div className=" row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {
                        allTestimonials.map((testimonial, index) => <TestimonialCard key={index} testimonial={testimonial} />)
                    }

                </div>
            </div>

        </section>
    );
};

export default Testimonial;