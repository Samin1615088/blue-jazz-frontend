import React from 'react';
import './ServiceCard.scss';

const ServiceCard = ({ serviceData }) => {
    return (
        <div className="col">
            <div className="card-container card h-100 service-card-container">
                <img src={serviceData.serviceImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title fw-bold text-uppercase">{serviceData.serviceName}</h4>
                    <p className="card-text">{serviceData.serviceDescription}</p>
                </div>
                <footer className="card-footer d-flex justify-content-between align-items-center">
                    <strong className="fs-3">$ {serviceData.price}</strong>
                    <button className="btn btn-brand text-uppercase">Buy This</button>
                </footer>
            </div>
        </div>
    );
};

export default ServiceCard;