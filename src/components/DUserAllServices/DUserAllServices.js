import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Slidebar from '../Dashboard/Slidebar/Slidebar';

const DUserAllServices = () => {
    //USER CONTEXT data receiving using context>
    const [userStatus] = useContext(UserContext);
    //USER CONTEXT data receiving using context<

    const [services, setServices] = useState([]);
    // const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch(`https://aqueous-earth-48070.herokuapp.com/getUserServices/${userStatus.email}`)
            .then(response => response.json())
            .then(data => {
                setServices(data);
            })
            .catch(error => console.log(error))
    }, []);
    console.log('getUserServices', services);

    // useEffect(() => {
    //     if (services.length > 0) {
    //         const total = services.reduce((acc, curr) => acc.price + curr.price, 0);
    //         console.log('total', total);
    //         setTotalPrice(total);
    //     }
    // }, [totalPrice])

    return (
        <section className=" bg-light vh-100">
            <div className="row ">
                <div className="col-md-3 col-sm-6 col-12">
                    <Slidebar />
                </div>
                <div className="col-md-9 col-sm-6 col-12 d-flex justify-content-center vh-100">
                    <div className="container  d-flex flex-column justify-content-center ">
                        {
                            services.length ?
                                <div>
                                    <h2 className="text-center">All The Services You Have Ordered</h2>
                                    <div className="p-5">
                                        <table className="table  table-dark table-striped">
                                            <thead>
                                                <tr>
                                                    <th className="text-secondary" scope="col">Name</th>
                                                    <th className="text-secondary" scope="col">Email</th>
                                                    <th className="text-secondary" scope="col">Service</th>
                                                    <th className="text-secondary" scope="col">Cash Paid</th>
                                                    <th className="text-secondary" scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    services.map((service, index) =>

                                                        <tr>
                                                            <td>{service.customerName}</td>
                                                            <td>{service.email}</td>
                                                            <td>{service.serviceName}</td>
                                                            <td>{service.price}</td>
                                                            <td>{service.orderStatus}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                            {/* <tfoot>
                                            <tr className="h5">
                                                <td>TOTAL</td>
                                                <td ></td>
                                                <td></td>
                                                <td>&#36; {totalPrice}</td>
                                                <td></td>
                                            </tr>
                                        </tfoot> */}
                                        </table>
                                    </div>
                                </div>
                                :
                                <div className="p-5">
                                    <h4 className="lead text-center">No Services has been ordered</h4>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DUserAllServices;