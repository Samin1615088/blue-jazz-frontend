import React from 'react';
import Slidebar from '../Dashboard/Slidebar/Slidebar';
import { useForm } from "react-hook-form";

const DAddNewAdmin = () => {
    //react hook form>> >>
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        console.log('ADMIN', data);


        //sending data to server >
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(res => {
                console.log("response from server", res);
                alert(`new admin is added`);
            });
        //sending data to server <
    }
    //react hook form<< <<

    return (
        <section className=" bg-light vh-100">
            <div className="row ">
                <div className="col-md-3 col-sm-6 col-12">
                    <Slidebar />
                </div>
                <div className="col-md-9 col-sm-6 col-12 d-flex justify-content-center vh-100">
                    <div className="container  d-flex flex-column justify-content-center ">
                        <h2 className="text-center">Add a new Admin for your website</h2>
                        <div className="bg-dark p-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <fieldset>
                                    <div className="form-group mb-3">
                                        <label className="form-label text-light fs-5 w-100">New Admin's Name
                                                <input type="text" id="nameInput" className="form-control" placeholder="Name"  {...register("name")} />
                                        </label>
                                    </div>
                                    <div className="form-group mb-3 ">
                                        <label className="form-label text-light fs-5 w-100">New Admin's Email
                                                <input type="email" id="emailInput" className="form-control" placeholder="Email" {...register("email")} />
                                        </label>
                                    </div>
                                </fieldset>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-brand">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
};

export default DAddNewAdmin;