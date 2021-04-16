import React from 'react';
import './Schedule.scss';
import EventCard from '../EventCard/EventCard';
import eventPic1 from './../../../images/event-1.jpg'
import eventPic2 from './../../../images/event-2.jpg'
import eventPic3 from './../../../images/event-3.jpg'

const upcomingEventsData = [
    {
        date: '27 July, 2022',
        eventName: 'PARTY AT NIGHT CLUB',
        image: eventPic1,
        place: 'London, England'
    },
    {
        date: '27 July, 2022',
        eventName: 'PARTY AT NIGHT CLUB',
        image: eventPic2,
        place: 'London, England'
    },
    {
        date: '27 July, 2022',
        eventName: 'PARTY AT NIGHT CLUB',
        image: eventPic3,
        place: 'London, England'
    }
]

const Schedule = () => {
    return (
        <section className=" container-fluid  vh-100 schedule-container d-flex flex-column justify-content-center ">
            <div className="event-container container h-75 text-center">
                <h2 className="display-5 fw-light text-light">Our Upcoming Events</h2>
                <div className="container-fluid mt-5">
                    {
                        upcomingEventsData.map(eventData => <EventCard eventData={eventData} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Schedule;