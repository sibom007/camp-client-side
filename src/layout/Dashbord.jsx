import React from 'react';
import { FaBookmark, FaCalendar, FaHome, FaShoppingCart, FaStar, FaUser, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import usecart from '../hooks/Usecart/usecart';

const Dashbord = () => {
    const [cart] = usecart()
    const isAdmin = true
    return (
        <div>
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
                                <li><NavLink to={'/dashbord/Admin'}> <FaHome /> Admin Home</NavLink></li>
                                <li><NavLink to={'/dashbord/Additem'}><FaUtensils />  add items</NavLink></li>
                                <li><NavLink to={'/dashbord/manageitems'}><FaWallet />manage items</NavLink></li>
                                <li><NavLink to={'/dashbord/managebookings'}><FaBookmark /> Manage bookings  <div className="badge bg-zinc-200 text-black">+{cart?.length || 0}</div></NavLink></li>
                                <li><NavLink to={'/dashbord/alldata'}> <FaUser /> All Users</NavLink></li>

                            </>
                                :
                                <>
                                    <li><NavLink to={'/'}> <FaHome /> User Home</NavLink></li>
                                    <li><NavLink to={'/dashbord/pament'}><FaCalendar />  Reservation</NavLink></li>
                                    <li><NavLink to={'/'}><FaWallet />  Payment Ristory</NavLink></li>
                                    <li><NavLink to={'/dashbord/cart'}><FaShoppingCart />  my cart  <div className="badge bg-zinc-200 text-black">+{cart?.length || 0}</div></NavLink></li>
                                    <li><NavLink to={'/'}> <FaStar /> add review</NavLink></li>
                                    <li><NavLink to={'/'}><FaBookmark /> my booking</NavLink></li>


                                </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;