import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Security/Login/Login";
import Regester from "../Security/Regester/Regester";
import Error from "../Error/Error";
import Home from "../Page/Home/Home/Home";
import Classdataloade from "../Page/Classpage/Classdataloade";
import Cart from "../Page/Dashbord/Cart/Cart";
import Dashbord from "../layout/Dashbord";
import Alluser from "../Page/Dashbord/Alluser/Alluser";
import PrivateRoutes from "./Private/PrivateRoutes";
// import Showallclassdata from "../Page/Classpage/Showallclassdata";
import Seeallcarts from "../Page/Dashbord/Seeallcarts/Seeallcarts";
import Payment from "../Page/Dashbord/Payment/Payment";
import Instoctorpage from "../Page/Instoctorpage/Instoctorpage";







const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'Login',
                element: <Login />
            },
            {
                path: "Regester",
                element: <Regester />
            },
            {
                path: 'Classpage',
                element: <Classdataloade />
            },
            {
                path: 'Instctor',
                element: <Instoctorpage />
            }
        ]
    },
    {
        path: 'dashbord',
        element:<PrivateRoutes><Dashbord /></PrivateRoutes> ,
        children: [
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'Seeallcart',
                element: <Seeallcarts />
            },
            {
                path: 'alldata',
                element: <Alluser />
            },
            {
                path: 'Payment',
                element: <Payment />
            },

        ]
    }
]);


export default router