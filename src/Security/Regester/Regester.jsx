import React, { useContext } from 'react';
import signloge from '../../../public/undraw_sign_in_re_o58h.svg'
import { useForm } from "react-hook-form";
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MyAuthcontext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Regester = () => {
    const { createuser, Updateprofil, googlesignin } = useContext(MyAuthcontext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const location = useLocation();
    const Navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const onSubmit = data => {

        const email = data.email
        const Password = data.password
        const conformpass = data.conformpass
        const photo = data.photourl
        const name = data.name
        console.log(conformpass);

        if (Password == conformpass) {
            createuser(email, Password)
                .then(data => {


                    Updateprofil(name, photo)

                        .then(() => {
                            const savedata = { name: name, email: email, img: data.photoURL }
                            fetch("https://assiment-12-server.vercel.app/users", {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(savedata)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        reset()
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'Sign in success Full',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        Navigate(from, { replace: true })

                                    }
                                })



                        })

                })
                .catch(error => {
                    Swal.fire(error.message, ' ', 'error')
                })
        }
        else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Password is not mach',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }


    const handlergooglelogin = () => {
        googlesignin()
            .then(data => {
                const savedata = { name: data.user?.displayName, email: data.user?.email, img:data.user?.photoURL }
                console.log(data.user                    );
                fetch("https://assiment-12-server.vercel.app/users", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedata)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            reset()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Sign in success Full',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            Navigate(from, { replace: true })

                        }
                    })
            })
            .catch(error => {
                Swal.fire(error.message, ' ', 'error')
            })
    }





    return (

        <div className='flex items-center space-x-5 mt-5 mb-5'>
            <Helmet>
                <title>Adventure Campus || Regester</title>
            </Helmet>
            <div><img src={signloge} alt="" /></div>
            <div>
                <form className='ml-10' onSubmit={handleSubmit(onSubmit)}>

                    <input className='w-96 p-2 border-2 rounded  mt-3' placeholder='Name' {...register("name", { required: true })} />


                    <input className='w-96 p-2 border-2 rounded  mt-3' placeholder='Photo Url' {...register("photourl", { required: true })} />


                    <input className='w-96 p-2 border-2 rounded  mt-3' placeholder='Email' {...register("email", { required: true })} />

                    <input className='w-96 p-2 border-2 rounded mt-3 mb-3' placeholder='Password' {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*-])/ })} />

                    <input className='w-96 p-2 border-2 rounded mt-3 mb-3' placeholder='conformpass' {...register("conformpass", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*-])/ })} />

                    <br />

                    {/* Password error */}
                    {errors.password?.type === "required" && <span className='text-red-500'>This Password is required</span>}
                    {errors.password?.type === "minLength" && <span className='text-red-500'>This Password Should be 6 caracter</span>}
                    {errors.password?.type === "maxLength" && <span className='text-red-500'>This Password only 20  caracter</span>}
                    {errors.password?.type === "pattern" && <span className='text-red-500'>This Password Min 1 uppercase letter <br />,Min 1 lowercase letter caracter</span>}
                    {errors.password?.type === "pattern" && <span className='text-red-500'>At least one special character</span>}

                    {/* Conform password error */}

                    {errors.conformpass?.type === "required" && <span className='text-red-500'>This Password is required</span>}
                    {errors.conformpass?.type === "minLength" && <span className='text-red-500'>This Password Should be 6 caracter</span>}
                    {errors.conformpass?.type === "maxLength" && <span className='text-red-500'>This Password only 20  caracter</span>}
                    {errors.conformpass?.type === "pattern" && <span className='text-red-500'>This Password Min 1 uppercase letter <br />,Min 1 lowercase letter caracter</span>}
                    {errors.conformpass?.type === "pattern" && <span className='text-red-500'>At least one special character</span>}



                    <br />

                    <button className='btn btn-outline btn-info btn-sm mt-2'> <input type="submit" value={'Sign in'} /></button>

                    <p>Have no Account <span className='text-blue-500'><Link to={'/Login'}>Login</Link></span></p>

                    <p className='ml-44 mt-4'><button onClick={handlergooglelogin} className="btn btn-circle btn-outline bg-blue-300 hover:bg-blue-500 text-slate-50">
                        <FaGoogle />
                    </button></p>
                </form>
            </div>
        </div>

    );
};

export default Regester;