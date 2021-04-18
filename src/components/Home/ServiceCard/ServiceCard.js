import React from 'react';
import './ServiceCard.scss';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    console.log('check this ------------', service.serviceImg.img);
    return (
        <div className="col">
            <div className="card-container card h-100 service-card-container">
                <div className="card-body">
                    <h4 className="card-title fw-bold text-uppercase">{service.serviceName}</h4>
                    <p className="card-text">{service.serviceDescription}</p>
                </div>
                <footer className="card-footer d-flex justify-content-between align-items-center">
                    <strong className="fs-3">$ {service.price}</strong>
                    <Link to={`/orderProcess/${service._id}`}><button className="btn btn-brand text-uppercase">Buy This</button>
                    </Link>
                </footer>
            </div>
        </div>
    );
};

export default ServiceCard;