
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
      //   <div className="flex items-center">
      //     <Helmet>
      //       <title>Adventure Campus || Login</title>
      //     </Helmet>
      //     <div className="flex items-center justify-center w-full mt-10">
      //       <div>
      //         <h1 className="flex justify-center items-center mt-2 mb-3 text-2xl font-semibold ">
      //           Login
      //         </h1>
      //         <form className="ml-10" onSubmit={handleSubmit(onSubmit)}>
      //           <input
      //             className="w-96 p-2 border-2 rounded "
      //             placeholder="Email"
      //             {...register("email", { required: true })}
      //           />
      //           <br />
      //           <input
      //             className="w-96 p-2 border-2 rounded mt-3"
      //             placeholder="Password"
      //             {...register("password", { required: true })}
      //           />

      //           <br />
      //           {errors.exampleRequired && <span>This field is required</span>}
      //           <br />
      //           <button className="btn btn-outline btn-info btn-sm mt-2">
      //             {" "}
      //             <input type="submit" value={"Login"} />
      //           </button>
      //         </form>
      //         <p className="ml-10">
      //           Have no Account{" "}
      //           <span className="text-blue-500">
      //             <Link to={"/Regester"}>Sign Up</Link>
      //           </span>
      //         </p>

      //         <p className="ml-44 mt-4">
      //           <button
      //             onClick={handlergooglelogin}
      //             className="btn btn-circle btn-outline bg-blue-300 hover:bg-blue-500 text-slate-50">
      //             <FaGoogle />
      //           </button>
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      <div className="flex items-center justify-center min-h-screen ">
        <Helmet>
          <title>Adventure Campus || Login</title>
        </Helmet>
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-full p-2 border-2 rounded mb-2 bg-white"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
            <input
              className="w-full p-2 border-2 rounded mb-2 bg-white"
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
            <button className="w-full bg-blue-500 text-white p-2 rounded mt-4">
              Login
            </button>
          </form>
          <p className="text-center mt-4">
            Have no Account?{" "}
            <span className="text-blue-500">
              <Link to="/Regester">Sign Up</Link>
            </span>
          </p>
          <div className="flex justify-center mt-4">
            <button
              onClick={handlergooglelogin}
              className="px-20 py-3 bg-blue-300  duration-200 hover:bg-blue-500 text-white rounded-lg  ">
              <FaGoogle />
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;