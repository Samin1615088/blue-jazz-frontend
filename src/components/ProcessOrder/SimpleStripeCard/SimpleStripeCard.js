import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './SimpleStripeCard.scss';

const SimpleStripeCard = ({handlePaymentSuccess}) => {
    //error message
    const [paymentError, setPaymentError] = useState(null);
    //success message
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {

        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error);
            setPaymentSuccess("");
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);

            setPaymentError("");
            setPaymentSuccess(paymentMethod.id)

            handlePaymentSuccess(paymentMethod.id, paymentMethod.card.last4)
        }
    };

    return (
        <form className="bg-light p-5 rounded w-75 mx-auto" onSubmit={handleSubmit}>
            <CardElement />

            <div className="text-center">
                <button className="btn btn-brand mt-5" type="submit" disabled={!stripe}>
                    Pay
                </button>
                <div className="my-5"></div>
                {
                    paymentError && <p className="text-danger">{paymentError.message}</p>
                }
                {
                    paymentSuccess && <p className="text-success">Payment Successful</p>
                }
            </div>

        </form>
    );
};

export default SimpleStripeCard;