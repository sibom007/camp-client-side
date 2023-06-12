
import LoginLogo from '../../../public/undraw_mobile_search_jxq5.svg'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { MyAuthcontext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { Login, googlesignin } = useContext(MyAuthcontext)
    const location = useLocation();
    const Navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const email = data.email
        const password = data.password

        Login(email, password)
            .then(data => {
                reset()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login success Full',
                    showConfirmButton: false,
                    timer: 1500
                })
                Navigate(from, { replace: true })
            })
            .catch(error => {
                Swal.fire(error.message, ' ', 'error')
            })





    };

    const handlergooglelogin = () => {
        googlesignin()
            .then(data => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign in success Full',
                    showConfirmButton: false,
                    timer: 1500
                })
                Navigate(from, { replace: true })
            })
            .catch(error => {
                Swal.fire(error.message, ' ', 'error')
            })
    }



    return (
        <div className='flex items-center space-x-5 mt-5 mb-5'>
            <Helmet>
                <title>Adventure Campus || Login</title>
            </Helmet>
            <div><img src={LoginLogo} alt="" /></div>
            <div>
                <form className='ml-10' onSubmit={handleSubmit(onSubmit)}>

                    <input className='w-96 p-2 border-2 rounded ' placeholder='Email' {...register("email", { required: true })} />
                    <br />
                    <input className='w-96 p-2 border-2 rounded mt-3' placeholder='Password' {...register("password", { required: true })} />

                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <br />

                    <button className='btn btn-outline btn-info btn-sm mt-2'> <input type="submit" value={'Login'} /></button>
                </form>
                <p className='ml-10'>Have no Account <span className='text-blue-500'><Link to={'/Regester'}>Sign Up</Link></span></p>

                <p className='ml-44 mt-4'><button onClick={handlergooglelogin} className="btn btn-circle btn-outline bg-blue-300 hover:bg-blue-500 text-slate-50">
                    <FaGoogle />
                </button></p>
            </div>
        </div>
    );
};

export default Login;