import { FaBookmark, FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import usecart from "../hooks/Usecart/usecart";
import useAdmin from "../hooks/useAdmin/useAdmin";
import useInstructor from "../hooks/useInstructor/useInstructor";
import { Helmet } from "react-helmet-async";

const Dashbord = () => {
  const [cart] = usecart();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const location = useLocation();

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
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>

        <div className="drawer-side">
          <ul className="menu p-4 w-80 h-full  text-base-content bg-[#20ADED]">
            <label
              htmlFor="my-drawer-2"
              className="text-white text-xl font-semibold border-b-2 border-b-white">
              Adventure Campus
            </label>
            {/* Sidebar content here */}

            {isAdmin ? (
              <div className="text-white mt-7">
                <Link
                  to={"/dashbord/Seeallcart"}
                  className={`
                    flex items-center gap-2 text-white px-1 py-3 rounded-xl text-lg pl-2
                    ${
                      location.pathname === "/dashbord/Seeallcart"
                        ? "bg-blue-200/40"
                        : ""
                    }
                  `}>
                  <FaHome /> Admin Home
                </Link>

                <Link
                  to={"/dashbord/cart"}
                  className={`
                    flex items-center gap-2 text-white px-1 py-3 rounded-xl text-lg pl-2
                    ${
                      location.pathname === "/dashbord/cart"
                        ? "bg-blue-200/40"
                        : ""
                    }
                  `}>
                  <FaBookmark /> Manage bookings{" "}
                  <div className="badge bg-zinc-200 text-black">
                    +{cart?.length || 0}
                  </div>
                </Link>

                <Link
                  to={"/dashbord/alldata"}
                  className={`
                    flex items-center gap-2 text-white px-1 py-3 rounded-xl text-lg pl-2
                    ${
                      location.pathname === "/dashbord/alldata"
                        ? "bg-blue-200/40"
                        : ""
                    }
                  `}>
                  {" "}
                  <FaUser /> Manage Users
                </Link>

                <div className="divider border-b-2 border-zinc-600/40"></div>
                <li>
                  <NavLink to={"/"}>
                    {" "}
                    <FaHome />
                    Home
                  </NavLink>
                </li>
              </div>
            ) : isInstructor ? (
              <>
                <Link
                  to={"/"}
                  className={`
                    flex items-center gap-2 text-white px-1 py-3 rounded-xl text-lg pl-2
                    ${location.pathname === "/" ? "bg-blue-200/40" : ""}
                  `}>
                  {" "}
                  <FaHome /> instector Home
                </Link>

                <Link
                  to={"/dashbord/Adddata"}
                  className={`
                    flex items-center gap-2 text-white px-1 py-3 rounded-xl text-lg pl-2
                    ${
                      location.pathname === "/dashbord/Adddata"
                        ? "bg-blue-200/40"
                        : ""
                    }
                  `}>
                  {" "}
                  <FaHome /> instector Add class
                </Link>

                <Link
                  to={"/dashbord/MyAddClass"}
                  className={`
                    flex items-center gap-2 text-white px-1 py-3 rounded-xl text-lg pl-2
                    ${
                      location.pathname === "/dashbord/MyAddClass"
                        ? "bg-blue-200/40"
                        : ""
                    }
                  `}>
                  {" "}
                  <FaHome /> My class
                </Link>
                <div className="divider border-b-2 border-zinc-600/40"></div>
                <Link
                  to={"/"}
                  className={`
                    flex items-center gap-2 text-white px-1 py-3 rounded-xl text-lg pl-2
                    ${location.pathname === "/" ? "bg-blue-200/40" : ""}
                  `}>
                  <FaHome />
                  Home
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={"/"}
                  className={`
                    flex items-center gap-2 text-white px-1 py-3 rounded-xl text-lg pl-2
                    ${location.pathname === "/" ? "bg-blue-200/40" : ""}
                  `}>
                  {" "}
                  <FaHome />
                  Home
                </Link>

                <Link
                  to={"/dashbord/cart"}
                  className={`
                    flex items-center gap-2 text-white px-1 py-3 rounded-xl text-lg pl-2
                    ${
                      location.pathname === "/dashbord/cart"
                        ? "bg-blue-200/40"
                        : ""
                    }
                  `}>
                  {" "}
                  <FaHome /> My class{" "}
                  <div className="badge bg-zinc-200 text-black">
                    +{cart?.length || 0}
                  </div>
                </Link>

                <Link
                  to={"/dashbord/EnRolledclass"}
                  className={`
                    flex items-center gap-2 text-white px-1 py-3 rounded-xl text-lg pl-2
                    ${
                      location.pathname === "/dashbord/EnRolledclass"
                        ? "bg-blue-200/40"
                        : ""
                    }
                  `}>
                  <FaShoppingCart /> EnRolled class{" "}
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
