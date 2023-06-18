import { useStripe } from '@stripe/react-stripe-js';
import { CardElement, useElements } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure/useAxiosSecure';
import useAuth from '../../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import './CheckoutFrom.css'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const CheckoutFrom = ({ price, singlecart }) => {
    const stripe = useStripe()
    const elements = useElements();
    const [carderror, setcarderror] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const Navigate = useNavigate()






    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, price])





    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setcarderror(error)
        }
        else {
            setcarderror('')
            // console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent)
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                // quantity: cart.length,
                cartItems: singlecart._id,
                enrollid: singlecart.enrollid,
                status: 'success',
                itemNames: singlecart.name,
                alldata: { singlecart }
            }

            fetch(`https://assiment-12-server.vercel.app/classpdatedata/${singlecart.enrollid}`)
                .then(res => res.json())
                .then(data => {

                    const newseat = data.availableSeats - 1
                    const newEnroll = data.Enroll + 1
                    const newupdatedata = { newseat, newEnroll }
                    console.log(newseat, newEnroll)

                    fetch(`https://assiment-12-server.vercel.app/classpdatedata/${singlecart.enrollid}`, {
                        method: "PUT",
                        headers: {
                            "content-type": 'application/json'
                        },
                        body: JSON.stringify(newupdatedata)
                    })

                })
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.result.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'PAYMENT success Full',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })

            Navigate('/')
        }
    }





    return (
        <div>
             <Helmet>
                <title>Adventure Campus || Payment</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline btn-warning btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {carderror && <p className='text-red-500 ml-8'>{carderror.message}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </div>
    );
};

export default CheckoutFrom