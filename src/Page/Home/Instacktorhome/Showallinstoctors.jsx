import React from 'react';

const Showallinstoctors = ({ Instctordata }) => {
    const { _id, email, name, image } = Instctordata
    return (
        <div className=' mt-5 mb-5 rounded ml-6 '>
            <div className="card card-compact  w-72 bg-base-100 shadow-xl">
                <figure><img className='h-48 rounded mt-3' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-center text-lg'>From <br /><span className='text-4xl'>{name}</span> </p>
                    <h2 className=" card-title bg-gray-100 opacity-100 p-1 rounded text-center text-gray-400 font-bold break-all">{email}</h2>
                </div>
            </div>
        </div>
    );
};

export default Showallinstoctors;