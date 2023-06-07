import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Security/Login/Login";
import Regester from "../Security/Regester/Regester";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: 'Login',
                element: <Login />
            },
            {
                path: "Regester",
                element: <Regester />
            }
        ]
    },
]);


export default router