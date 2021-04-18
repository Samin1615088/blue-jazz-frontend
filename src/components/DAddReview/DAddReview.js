import React, { useContext } from 'react';
import Slidebar from '../Dashboard/Slidebar/Slidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const DAddReview = () => {
    //USER CONTEXT data receiving using context>
    const [userStatus] = useContext(UserContext);
    //USER CONTEXT data receiving using context<


    //react hook form>> >>
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.profilePic = userStatus.profilePicUrl;
        console.log('user review', data);


        //sending data to server >
        fetch('https://aqueous-earth-48070.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(res => {
                console.log("response from server", res);
                alert('Your feedback is successfully received');
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
                        <h2 className="text-center">Do you have a moment to give us your valuable feedback?</h2>
                        <div className="bg-dark p-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <fieldset>
                                    <div className="form-group mb-3">
                                        <label className="form-label text-light fs-5 w-100">Your Name
                                                <input type="text" id="nameInput" className="form-control" placeholder="Name" value={userStatus.displayName} readOnly {...register("userName")} />
                                        </label>
                                    </div>
                                    <div className="form-group mb-3 ">
                                        <label className="form-label text-light fs-5 w-100">Your Feedback
                                                <input type="text" id="msgInput" className="form-control pb-5" placeholder="Write here" {...register("msg")} />
                                        </label>
                                    </div>
                                    <div className="form-group mb-3 w-25">
                                        <label className="form-label text-light fs-5 w-100">Give Us Rating
                                            <br />
                                            <select className="form-select"  {...register("rating")}>
                                                <option type="number" value={1}>1</option>
                                                <option type="number" value={2}>2</option>
                                                <option type="number" value={3}>3</option>
                                                <option type="number" value={4}>4</option>
                                                <option type="number" value={5} selected>5</option>
                                            </select>
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
    )
};

export default DAddReview;