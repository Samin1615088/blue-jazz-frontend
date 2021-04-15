import React from 'react';

const ServiceCard = ({serviceData}) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={serviceData.serviceImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{serviceData.serviceName}</h4>
                    <p className="card-text">{serviceData.serviceDescription}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <strong>$ {serviceData.price}</strong>
                    <button className="btn btn-success text-uppercase">Buy This</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;