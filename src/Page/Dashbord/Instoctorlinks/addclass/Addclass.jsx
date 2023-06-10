import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';

const Addclass = () => {

    const { user } = useAuth()

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/Instructoradddata', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ data })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ' add Class success full',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }





    return (
        <div className='w-full ml-10'>
            <h1 className='text-center text-4xl font-bold text-slate-400 mt-5'>------------------------- <br /> Add Class<br /> ------------------------</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='flex space-x-5'>
                    <input type="text" placeholder='Name' {...register("name", { required: true })} />
                    <input type="text" placeholder='Img Url' {...register("img", { required: true })} />
                </div>
                <div className='flex space-x-5'>
                    <input type="text" hidden defaultValue={user?.displayName} {...register("instorctorname", { required: true })} />
                    <input type="text" hidden defaultValue={user?.email} {...register("instorctoremail", { required: true })} />
                    <input type="text" hidden defaultValue={'pending'} {...register("status", { required: true })} />
                </div>
                <div className='flex space-x-5'>
                    <input type="text" placeholder='Ablable sit' {...register("Ablablesit", { required: true })} />
                    <input type="text" placeholder='price' {...register("price", { required: true })} />
                </div>

                <button className='btn btn-outline btn-info btn-sm mt-2 ml-40'> <input type="submit" value={'Add Class'} /></button>
            </form>

        </div>
    );
};

export default Addclass;