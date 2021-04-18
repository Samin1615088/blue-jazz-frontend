import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Slidebar from '../Dashboard/Slidebar/Slidebar';

const DAddNewServiceAdmin = () => {
    const [serviceInfo, setServicesInfo] = useState({});
    const [file, setFile] = useState(null);

    //form>> >>
    const handleBlur = e => {
        const newInfo = { ...serviceInfo };
        newInfo[e.target.name] = e.target.value;
        setServicesInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('serviceName', serviceInfo.serviceName);
        formData.append('serviceDescription', serviceInfo.serviceDescription);
        formData.append('price', serviceInfo.price);
        console.log(formData);

        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    // form<< <<

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
                            <form onSubmit={handleSubmit}>
                                <fieldset>
                                    <div className="form-group mb-3">
                                        <label className="form-label text-light fs-5 w-100">Add Service Name
                                                <input type="text" id="serviceNameInput" className="form-control" name="serviceName" placeholder="Enter here" onBlur={handleBlur} />
                                        </label>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label text-light fs-5 w-100">Add Service Description
                                                <input type="text" id="serviceDescriptionInput" className="form-control" name="serviceDescription" placeholder="Enter here" onBlur={handleBlur} />
                                        </label>
                                    </div>
                                    <div className="form-group mb-3 ">
                                        <label className="form-label text-light fs-5 w-100">Cash Payment
                                                <input type="number" id="priceInput" className="form-control" name="price" placeholder="Enter here" onBlur={handleBlur} />
                                        </label>
                                    </div>
                                    <div className="form-group mb-3 ">
                                        <label className="form-label text-light fs-5 w-100">Add Image
                                                <input type="file" id="fileInput" className="form-control" name="serviceImg" onChange={handleFileChange} />
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

export default DAddNewServiceAdmin;