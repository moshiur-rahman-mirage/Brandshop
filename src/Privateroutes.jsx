import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const Privateroutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        <span className="loading loading-spinner loading-lg"></span>
        console.log(loading)
    }

    if(user){
        console.log(user)
        return children;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>;

};

export default Privateroutes;