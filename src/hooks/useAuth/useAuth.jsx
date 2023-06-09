import { useContext } from "react"
import { MyAuthcontext } from "../../Provider/Authprovider";

const useAuth = () => {
    const auth = useContext(MyAuthcontext);
    return auth;
}

export default useAuth;