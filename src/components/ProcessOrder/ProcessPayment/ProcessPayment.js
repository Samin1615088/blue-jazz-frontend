import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleStripeCard from '../SimpleStripeCard/SimpleStripeCard';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeAVdAyg35DiCpGHSxjcxU5YG9n9PqivEC76W9ZeU4dMQBTxuIdI7zslx015IEKUMfS3XIOsjOUx3XKHWrAOOEY00o2vPgjiz');

const ProcessPayment = ({handlePaymentSuccess}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleStripeCard handlePaymentSuccess={handlePaymentSuccess}/>
        </Elements>
    );
};

export default ProcessPayment;