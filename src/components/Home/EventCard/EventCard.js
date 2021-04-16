import React from 'react';

const EventCard = (props) => {
    const { date, eventName, place, image } = props.eventData;
    const splittedDate = date.split(' ');
    return (
            <div className='row text-white my-3'>
                <div className="col-6 col-md-3 d-flex flex-column justify-content-center">
                    <p><span className="display-5 fw-bold">{splittedDate[0]}</span> <span>{splittedDate[1] + splittedDate[2]}</span></p>
                </div>
                <div className="col-6 col-md-3">
                    <img src={image} alt="" className="img-thumbnail" />
                </div>
                <div className="col-6 p-3 col-md-4 d-flex flex-column justify-content-center">
                    <h3 className="fw-bold">{eventName}</h3>
                    <h5>{place}</h5>
                </div>
                <div className="col-6 col-md-2 text-dark d-flex flex-column justify-content-center align-items-center">
                    <button className="btn-brand px-2">Details</button>
                </div>
            </div>
    );
};

export default EventCard;