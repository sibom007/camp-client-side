import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const Update = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const update = useLoaderData();
    const { _id } = update


    const onSubmit = data => {

        console.log(data);

        fetch(`https://assiment-12-server.vercel.app/Instructordata/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ data })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ' Update success full',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }
    return (
        <div className='w-full ml-10'>
             <Helmet>
                <title>Adventure Campus || Update data</title>
            </Helmet>
            <div >
                <h1 className='text-center text-4xl font-bold text-slate-400 mt-5'>------------------------- <br /> Update Class<br /> ------------------------</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex space-x-5'>
                        <input type="text" placeholder='Name' {...register("name", { required: true })} />
                        <input type="text" placeholder='Img Url' {...register("img", { required: true })} />
                    </div>
                    <div className='flex space-x-5'>
                        <input type="text" placeholder='Ablable sit' {...register("Ablablesit", { required: true })} />
                        <input type="text" placeholder='price' {...register("price", { required: true })} />
                    </div>

                    <button className='btn btn-outline btn-info btn-sm mt-2 ml-40'> <input type="submit" value={'Update Class'} /></button>
                </form>

            </div>
        </div>
    );
};

export default Update;