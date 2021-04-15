import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.scss';
import tentImg from './../../../images/tent-service-op.jpg';
import foodImg from './../../../images/food-service-op.jpg';
import drinkImg from './../../../images/drinks-service-op.jpg';

const servicesData = [
    { serviceName: "Tent Service", serviceDescription: "Our service is the best you can find", serviceImg: tentImg, price: 330 },
    { serviceName: "Food Service",serviceDescription: "Our service is the best you can find", serviceImg: foodImg, price: 130 },
    { serviceName: "Beverage Service",serviceDescription: "Our service is the best you can find", serviceImg: drinkImg, price: 40 }
];

const Services = ({ reference }) => {
    return (
        <section ref={reference} className="service-container vh-100 d-flex flex-column justify-content-center">
            <div className="container h-75 text-center">
                <h2 className="display-5 fw-light text-light">Our Services On The Festival</h2>

                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {
                        servicesData.map((serviceData, index) => < ServiceCard key={index} serviceData={serviceData} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;