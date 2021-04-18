import React from 'react';
import OrderedService from '../OrderedService/OrderedService';
import Slidebar from './../Slidebar/Slidebar';

const Dashboard = () => {
    return (
        //  delete this bg-light
        <section className=" bg-light vh-100">
        <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
                <Slidebar />
            </div>
            <div className="col-md-4 col-sm-12 col-12 d-flex justify-content-center">
                {/* <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                /> */}
                <h1>Calender</h1>
            </div>
            <div className="col-md-5 col-sm-12 col-12">
                <OrderedService />
            </div>
        </div>
    </section>
    );
};

export default Dashboard;