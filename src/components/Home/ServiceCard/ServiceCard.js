import React from 'react';
import './ServiceCard.scss';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    return (
        <div className="col">
            <div className="card-container card h-100 service-card-container">
                <img src={service.serviceImg ? service.serviceImg : "https://dummyimage.com/600x400/000/ff0048&text=Image+Not+Available"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title fw-bold text-uppercase">{service.serviceName}</h4>
                    <p className="card-text">{service.serviceDescription}</p>
                </div>
                <footer className="card-footer d-flex justify-content-between align-items-center">
                    <strong className="fs-3">$ {service.price}</strong>
                    <Link to="/orderProcess"><button className="btn btn-brand text-uppercase">Buy This</button>
                    </Link>
                </footer>
            </div>
        </div>
    );
};

export default ServiceCard;