import React from 'react';
import './ContuctUs.scss';

const ContactUs = () => {
    return (
        <section className="container container-contact-us vh-100 text-center d-flex flex-column justify-content-center">
            <div className="text-center ">
                <h2 className="display-5 fw-light text-light py-5">CONTACT US</h2>
                <form className="w-50 mx-auto">
                    <fieldset>
                        <div className="mb-3">
                            <input type="email" id="emailInput" className="form-control" placeholder="Email*" />
                        </div>
                        <div className="mb-3">
                            <input type="text" id="subjectInput" className="form-control" placeholder="Subject*" />
                        </div>
                        <div className="mb-3">
                            <textarea type="text" id="textareaInput" className="form-control" placeholder="Your Message*" style={{ height: "300px" }} />
                        </div>
                        <button type="submit" className="btn btn-brand">Submit</button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;