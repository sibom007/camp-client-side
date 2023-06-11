import { useStripe } from '@stripe/react-stripe-js';
import { CardElement, useElements } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure/useAxiosSecure';
import useAuth from '../../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import'./CheckoutFrom.css'


const CheckoutFrom = ({ price, singlecart }) => {
    const stripe = useStripe()
    const elements = useElements();
    const [carderror, setcarderror] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');






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
                alldata:{singlecart}
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
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


        }
    }



    return (
        <div>
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