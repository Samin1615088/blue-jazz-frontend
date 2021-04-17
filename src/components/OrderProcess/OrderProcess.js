import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const OrderProcess = () => {
    const { serviceId } = useParams();
    //orderInfo 
    const [orderInfo, setOrderInfo] = useState('');
    //orderedService info 
    const [orderedService, setOrderedService] = useState({});
    //loading 
    const [loading, setLoading] = useState(false);


    //USER CONTEXT data receiving using context>
    const [userStatus, setUserStatus] = useContext(UserContext);
    //USER CONTEXT data receiving using context<


    //get ORDERED-SERVICE-by-id from server>>
    useEffect(() => {
        fetch(`http://localhost:5000/getOrderedService/${serviceId}`)
            .then(response => response.json())
            .then(data => {
                setOrderedService(data);
                setLoading(true);
            })
            .catch(error => console.log(error))
    }, []);
    // console.log('orderedService', orderedService);
    //get all products from server<<



    //react hook form>> >>
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.serviceName = orderedService.serviceName;
        data.price = orderedService.price;
        setOrderInfo(data);
    }
    console.log('orderInfo', orderInfo);
    //react hook form<< <<

    return (
        <div className="container vh-100">
            <div className="row row-cols-md-2 row-cols-1 h-100">
                {/* form */}
                <div className="col d-flex flex-column justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset>
                            <div className="form-group mb-3">
                                <label className="form-label text-light fs-5 w-100">Customer Name
                                <input type="text" id="nameInput" className="form-control" placeholder="Name" value={userStatus.displayName} readOnly {...register("customerName")} />
                                </label>
                            </div>

                            <div className="form-group mb-3">
                                <label className="form-label text-light fs-5 w-100">Email
                                <input type="email" id="emailInput" className="form-control" placeholder="Email*" value={userStatus.email} readOnly {...register("email")} />
                                </label>
                            </div>

                            <div className="form-group mb-3">
                                <label className="form-label text-light fs-5 w-100">Service
                                <input type="text" id="serviceNameInput" className="form-control" placeholder="Service Name*" value={orderedService.serviceName} readOnly {...register("serviceName")} />
                                </label>
                            </div>

                            <div className="form-group mb-3">
                                <label className="form-label text-light fs-5 w-100">Price
                                    <input type="number" id="priceInput" className="form-control" placeholder="Service Price*" value={orderedService.price} readOnly {...register("price")} />
                                </label>
                            </div>

                            {
                                loading ?
                                    (<div class="text-center">
                                        <button type="submit" className="btn btn-brand">Submit</button>
                                    </div>)
                                    :
                                    (<div class="text-center">
                                        <div class="spinner-border text-danger" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>)
                            }
                        </fieldset>
                    </form>
                </div>
                {/* stripe payment */}
                <div className="col-12 col-md-6">

                </div>
            </div>
        </div>
    );
};

export default OrderProcess;