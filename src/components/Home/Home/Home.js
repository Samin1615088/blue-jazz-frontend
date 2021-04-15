import React, { useRef } from 'react';
import HomeMainHeader from '../HomeMainHeader/HomeMainHeader';
import Schedule from '../Schedule/Schedule';
import Services from '../Services/Services';

const Home = () => {

    // scrolling from 'check our service' btn to 'Services' component>> >>
    const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
    const el1From = useRef();
    const el2To = useRef();
    // scrolling << <<

    return (
        <div>
            <HomeMainHeader reference={el1From} click={() => scrollToDiv(el2To)} />
            <Schedule />
            <Services reference={el2To} />
        </div>
    );
};

export default Home;