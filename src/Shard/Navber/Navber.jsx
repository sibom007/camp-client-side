import React from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { MyAuthcontext } from '../../Provider/Authprovider';
import nologin from '../../../public/undraw_female_avatar_efig.svg'
import logo from '../../../public/Screenshot 2023-06-07 045813.png'
import usecart from '../../hooks/Usecart/usecart';
import { FaShoppingCart } from 'react-icons/fa';
const Navber = () => {
    const { user, Logout } = useContext(MyAuthcontext)
    const [cart] = usecart()


    const handlerlogout = () => {
        Logout()
    }

    const navbar = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={"/Instctor"}>Instructors</Link></li>
        <li><Link to={"/Classpage"}>Classes</Link></li>
        <Link to={'/dashbord/cart'}><li>



            <button className="btn bg-[#89b5fa] hover:bg-[#89b5fa] gap-2">
                <FaShoppingCart />
                <div className="badge bg-zinc-200 text-black">+{cart?.length || 0}</div>
            </button>
        </li></Link>

        {user ?
            <>
                <li><Link to={"/dashbord"}>Dashboard </Link></li>
                <li><Link onClick={handlerlogout}>Logout</Link></li>
            </>
            :
            <li><Link to={'Login'}>Login</Link></li>}

        <div className="tooltip tooltip-bottom tooltip-error" data-tip={user?.displayName}>
            {user ? <span><img className='w-10 mask mask-squircle' src={user?.photoURL} alt="" /></span> : <span><img className='w-10 mask mask-squircle' src={nologin} alt="" /></span>}
        </div>




    </>
    return (
        <div>
            <div className="navbar bg-blue-300 rounded">
                <div className="navbar-start">
                    <div className="dropdown z-40">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                            {navbar}
                        </ul>
                    </div>
                    <div className='w-24 mask mask-hexagon tooltip tooltip-bottom' data-tip="Adventure Campus"> <img className="h-16 w-20 bg-blue-300 hidden md:block" src={logo} alt="" /></div>


                    <a className="  text-2xl font-bold">Adventure Campus</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3 text-lg font-bold">
                        {navbar}
                    </ul>
                </div>
                <div className=" tooltip tooltip-bottom" data-tip={user?.displayName}>


                </div>
            </div>
        </div>
    );
};

export default Navber;