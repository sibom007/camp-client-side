import React from 'react';
import { Helmet } from 'react-helmet-async';
// import { Link } from 'react-router-dom';

const Showallinstoctor = ({ Instctordata }) => {
    const { _id, email, name, image } = Instctordata

    return (
        <div className=' mt-5 mb-5 rounded'>
            <Helmet>
                <title>Adventure Campus || Instctor</title>
            </Helmet>
          <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img className='h-48 rounded mt-3' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-center text-lg'>From <br /><span className='text-4xl'>{name}</span> </p>
                    <h2 className=" card-title bg-gray-100 opacity-100 p-1 rounded text-center text-gray-400 font-bold text-2xl break-all">{email}</h2>
                </div>
            </div>
        </div>
    );
};

export default Showallinstoctor;