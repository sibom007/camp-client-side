import React from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { MyAuthcontext } from '../../Provider/Authprovider';
import nologin from '../../../public/undraw_female_avatar_efig.svg'

const Navber = () => {
    const { user, Logout } = useContext(MyAuthcontext)


    const handlerlogout = () => {
        Logout()
    }

    const navbar = <>
        <li><Link>Home</Link></li>
        <li><Link> Add A Toy</Link></li>
        <li><Link>All Toys</Link></li>
        {user ? <li><Link onClick={handlerlogout}>Logout</Link></li> : <li><Link to={'Login'}>Login</Link></li>}
        <div className="tooltip tooltip-bottom tooltip-error" data-tip={user?.displayName}>
            {user ? <span><img className='w-10 mask mask-squircle' src={user?.photoURL} alt="" /></span> : <span><img className='w-10 mask mask-squircle' src={nologin} alt="" /></span>}
        </div>




    </>
    return (
        <div>
            <div className="navbar bg-blue-300 rounded">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <img className="h-16 w-20" src='' alt="" />
                    <a className="  text-2xl font-bold">Toy-World</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 ">
                        {navbar}
                    </ul>
                </div>
                <div className=" tooltip tooltip-bottom" data-tip=''>
                    <img className="w-16 rounded-full " src='' alt="" />

                </div>
            </div>
        </div>
    );
};

export default Navber;