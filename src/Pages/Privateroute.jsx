import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {

    const location = useLocation()
    console.log(location)

    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children
    }

    return <Navigate to='/login'></Navigate>
        
    ;
};

export default Privateroute;