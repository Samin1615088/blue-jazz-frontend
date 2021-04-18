import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.scss';
import tentImg from './../../../images/tent-service-op.jpg';
import foodImg from './../../../images/food-service-op.jpg';
import drinkImg from './../../../images/drinks-service-op.jpg';

const servicesData = [
    { serviceName: "Tent Service", serviceDescription: "Our service is the best you can find", serviceImg: tentImg, price: 330 },
    { serviceName: "Food Service", serviceDescription: "Our service is the best you can find", serviceImg: foodImg, price: 130 },
    { serviceName: "Beverage Service", serviceDescription: "Our service is the best you can find", serviceImg: drinkImg, price: 40 }
];

const Services = ({ reference }) => {
    const [allServices, setAllServices] = useState([]);

    //get all products from server>>
    useEffect(() => {
        fetch(`https://aqueous-earth-48070.herokuapp.com/allServices`)
            .then(response => response.json())
            .then(data => {
                setAllServices(data);
            })
            .catch(error => console.log(error))
    }, []);
    //get all products from server<<


    return (
        <section ref={reference} className="service-container vh-100 d-flex flex-column justify-content-center">
            <div className="container h-75 text-center">
                <h2 className="display-5 fw-light text-light">Our Services On The Festival</h2>

                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {
                        allServices?.map((service, index) => < ServiceCard key={index} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;