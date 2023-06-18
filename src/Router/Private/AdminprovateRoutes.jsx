
// import { Navigate } from "react-router-dom";
// import { useLocation } from "react-router-dom"
// import useAuth from "../../hooks/useAuth/useAuth";
// import useAdmin from "../../hooks/useAdmin/useAdmin";




// const AdminprovateRoutes = ({ children }) => {
//     const [isAdmin, isAdminLoading] = useAdmin()
//     const { user, loading } = useAuth();


//     const location = useLocation()

//     if (loading || isAdminLoading) {
//         return <progress className="progress progress-accent w-56" value="40" max="100"></progress>
//     }

//     if (user?.email && isAdmin) {
//         return children;

//     }
//     return <Navigate to={'/'} state={{ from: location }} replace />
// };

// export default AdminprovateRoutes;