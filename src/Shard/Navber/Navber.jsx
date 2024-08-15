import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyAuthcontext } from "../../Provider/Authprovider";
import nologin from "../../../public/undraw_female_avatar_efig.svg";
import logo from "../../../public/Screenshot 2023-06-07 045813.png";
import usecart from "../../hooks/Usecart/usecart";
import { FaShoppingCart } from "react-icons/fa";

const Navber = () => {
  const { user, Logout } = useContext(MyAuthcontext);
  const [cart] = usecart();

  const handlerlogout = () => {
    Logout();
  };

  const navbar = (
    <div className="flex gap-5 justify-center items-center text-white font-medium">
      <Link to={"/"}>Home</Link>

      <Link to={"/Instctor"}>Instructors</Link>

      <Link to={"/Classpage"}>Classes</Link>

      <Link to={"/dashbord/cart"}>
        <button className="px-4 flex rounded-lg items-center py-3 bg-[#89b5fa] hover:bg-[#89b5fa] gap-2">
          <FaShoppingCart className="text-white" />
          <div className="badge bg-zinc-200 text-black">
            +{cart?.length || 0}
          </div>
        </button>
      </Link>
      <div className="tooltip tooltip-bottom tooltip-error">
        {user ? (
          <div>
            <div className="dropdown dropdown-hover">
              <div>
                <img
                  className="w-10 mask mask-squircle"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-slate-200 text-zinc-800 font-medium text-sm  rounded-box z-[1]  p-2 shadow-md">
                <div>
                  <li>
                    <Link to={"/dashbord"}>Dashboard </Link>
                  </li>
                  <li>
                    <Link onClick={handlerlogout}>Logout</Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 items-center justify-center">
            <span>
              <img className="w-10 mask mask-squircle" src={nologin} alt="" />
            </span>
            <span>
              <Link
                className="px-3 py-3 hover:bg-zinc-500 duration-500 rounded-xl"
                to={"/login"}>
                Login
              </Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
  return (
    <div>
      <div className="navbar  bg-blue-300 rounded">
        <div className="navbar-start">
          <div className="dropdown z-40">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
              {navbar}
            </ul>
          </div>

          {/* Destop Navbar */}
          <div className="px-5" data-tip="Adventure Campus">
            <img
              className="w-[50px] rounded-full h-[50px] bg-blue-300 hidden md:block"
              src={logo}
              alt=""
            />
          </div>
          <p className="text-xl font-bold text-white">Adventure Campus</p>
        </div>

        <div className="navbar-center hidden lg:flex lg:ml-16 xl:ml-48 2xl:ml-64">
          <ul className="menu menu-horizontal">{navbar}</ul>
        </div>

        <div
          className=" tooltip tooltip-bottom"
          data-tip={user?.displayName}></div>
      </div>
    </div>
  );
};

Navber.propTypes = {
  toggleSwitch: PropTypes.func.isRequired,
};

export default Navber;
