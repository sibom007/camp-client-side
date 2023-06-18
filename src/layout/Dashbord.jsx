import React from 'react';
import { FaBookmark, FaCalendar, FaHome, FaShoppingCart, FaStar, FaUser, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import usecart from '../hooks/Usecart/usecart';
import useAdmin from '../hooks/useAdmin/useAdmin';
import useInstructor from '../hooks/useInstructor/useInstructor';
import useAuth from '../hooks/useAuth/useAuth';
import { Helmet } from 'react-helmet-async';

const Dashbord = () => {
    const { loading } = useAuth()
    // if (loading) {
    //     return <div>porogress</div>
    // }
    const [cart] = usecart()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()


    return (
        <div>
            <Helmet>
                <title>Adventure Campus || Dashbord</title>
            </Helmet>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content bg-[#20ADED]">
                        {/* Sidebar content here */}

                        {
                            isAdmin ? <>
                                <li><NavLink to={'/dashbord/Seeallcart'}> <FaHome /> Admin Home</NavLink></li>
                                <li><NavLink to={'/dashbord/cart'}><FaBookmark /> Manage bookings  <div className="badge bg-zinc-200 text-black">+{cart?.length || 0}</div></NavLink></li>
                                <li><NavLink to={'/dashbord/alldata'}> <FaUser /> Manage Users</NavLink></li>
                                <div className="divider">OR</div>
                                <li><NavLink to={'/'}> <FaHome />Home</NavLink></li>


                            </>
                                :
                                isInstructor ? <>
                                    <li><NavLink to={'/'}> <FaHome /> instector Home</NavLink></li>
                                    <li><NavLink to={'/dashbord/Adddata'}> <FaHome /> instector Add class</NavLink></li>
                                    <li><NavLink to={'/dashbord/MyAddClass'}> <FaHome /> My class</NavLink></li>
                                    <div className="divider">OR</div>
                                    <li><NavLink to={'/'}> <FaHome />Home</NavLink></li>

                                </>
                                    :
                                    <>

                                        <li><NavLink to={'/'}> <FaHome />Home</NavLink></li>
                                        <li><NavLink to={'/dashbord/cart'}> <FaHome /> My class <div className="badge bg-zinc-200 text-black">+{cart?.length || 0}</div></NavLink></li>
                                        <li><NavLink to={'/dashbord/EnRolledclass'}><FaShoppingCart /> EnRolled class </NavLink></li>


                                    </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;