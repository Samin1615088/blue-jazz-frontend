import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Slidebar from '../Dashboard/Slidebar/Slidebar';

const DManageAdmin = () => {
    //USER CONTEXT data receiving using context>
    const [userStatus] = useContext(UserContext);
    //USER CONTEXT data receiving using context<

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch(`https://aqueous-earth-48070.herokuapp.com/getAdminServices/`)
            .then(response => response.json())
            .then(data => {
                setAllOrders(data);
            })
            .catch(error => console.log(error))
    }, []);
    console.log('getUserServices', allOrders);

    return (
        <section className=" bg-light vh-100">
            <div className="row ">
                <div className="col-md-3 col-sm-6 col-12">
                    <Slidebar />
                </div>
                <div className="col-md-9 col-sm-6 col-12 d-flex justify-content-center vh-100">
                    <div className="container  d-flex flex-column justify-content-center ">
                        {
                            allOrders.length ?
                                <div>
                                    <h2 className="text-center">All The Services Your Customers Have Ordered</h2>
                                    <div className="p-5">
                                        <table className="table  table-dark table-striped">
                                            <thead>
                                                <tr>
                                                    <th className="text-secondary" scope="col">Name</th>
                                                    <th className="text-secondary" scope="col">Email</th>
                                                    <th className="text-secondary" scope="col">Service</th>
                                                    <th className="text-secondary" scope="col">Cash Paid</th>
                                                    <th className="text-secondary" scope="col">Status</th>
                                                    <th className="text-secondary" scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    allOrders.map((service, index) =>
                                                        <tr>
                                                            <td>{service.customerName}</td>
                                                            <td>{service.email}</td>
                                                            <td>{service.serviceName}</td>
                                                            <td>{service.price}</td>
                                                            <td>{service.orderStatus}</td>
                                                            <td><button className="btn btn-danger" onClick={(e) => console.log(e.target.value)}>Delete</button></td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
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

export default DManageAdmin;