import React from 'react';
import CheckoutFrom from './CheckoutFrom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { FcApproval } from "react-icons/fc";
// import usecart from '../../../hooks/Usecart/usecart';
import { useLoaderData } from 'react-router-dom';


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY)
    // const [cart] = usecart();
    const singlecart = useLoaderData()
    console.log(singlecart);

    // const total = cart.reduce((sum, item) => sum + item.price, 0);
    // const prices = parseFloat(total.toFixed(2))

    const total = singlecart.price
    const price = parseFloat(total) 
    return (
        <div className='w-2/4'>
            <h1 className='text-center text-2xl font-bold mb-5'><FcApproval className='w-36 h-36 ml-32' />Payment To Enroll </h1>
            <Elements stripe={stripePromise}>
                <CheckoutFrom price={price} singlecart={singlecart} />
            </Elements>
        </div>
    );
};

export default Payment;