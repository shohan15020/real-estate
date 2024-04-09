import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/FirebaseProvider";


const PriviteRoutes2 = ({children}) => {
    const { user} = useContext(AuthContext)


    if (user) {
        return children
    }

    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PriviteRoutes2;