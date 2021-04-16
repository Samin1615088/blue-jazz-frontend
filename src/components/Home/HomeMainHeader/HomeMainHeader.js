import React, { useRef } from 'react';
import './HomeMainHeader.scss';
import Navbar from '../../shared/Navbar/Navbar';

const HomeMainHeader = ({ reference, click }) => {

    return (
        <section className="container-fluid home-main-header vh-100">
            <Navbar />
            <div className="header-content d-flex flex-column justify-content-center align-items-center h-50">
                <div className="">
                    <h1 className="display-1 fw-bold text-light text-center">SUMMER MUSIC FESTIVAL</h1>
                    <h1 className="display-1 fw-bold text-center">BLUE JAZZ</h1>
                </div>
                <div className="text-light text-center">
                    <h4>MUSIC IS NOT A DRUG. IT'S AN  ADDICTION</h4>
                </div>
                <div ref={reference}>
                    <button className="btn btn-brand mt-5" onClick={click}>CHECK OUR SERVICES</button>
                </div>
            </div>
        </section>
    );
};

export default HomeMainHeader;