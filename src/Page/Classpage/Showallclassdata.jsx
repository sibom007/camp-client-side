import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { MyAuthcontext } from '../../Provider/Authprovider';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Showallclassdata = ({ classdata }) => {

    const { user } = useContext(MyAuthcontext)
    const { _id, name, img, instructor, price, availableSeats, Enroll } = classdata

    const navigate = useNavigate()



    const Handlerenroll = classdata => {
        if (user && user?.email) {
            const Enrolldata = { enrollid: _id, name, img, price, availableSeats, instructor, email: user.email }
            fetch('https://assiment-12-server.vercel.app/Enroll', {
                method: "POST",
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(Enrolldata)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Cart add success full',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

        else {

            Swal.fire({
                title: 'Please login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log in please!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/Login")
                }
            })

        }

    }




    return (
        <div>
            <Helmet>
                <title>Adventure Campus || Class</title>
            </Helmet>
            <div className={`card card-compact w-96 bg-base-100 shadow-xl ${availableSeats === 0 ? 'bg-red-500' : ''}`}>
                <figure><img className='h-48 rounded' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-center text-lg'>From <br /><span className='text-4xl'>${price}</span> </p>
                    <h2 className=" card-title  opacity-100 p-1 rounded text-center text-gray-400 font-bold text-2xl">{name}</h2>

                    <ul className='flex'>
                        
                        <ul>
                            <li className='text-xl font-bold'>availableSeats :{availableSeats}</li>
                            <li className='text-xl font-bold'>EnRoll :{Enroll}</li>
                        </ul>

                    </ul>
                    <p className='text-xl font-bold'>Instructor : {instructor}</p>
                    <div className="card-actions justify-center">
                        <Link><button onClick={() => Handlerenroll(classdata)} className="btn btn-outline btn-info">Enroll Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showallclassdata;