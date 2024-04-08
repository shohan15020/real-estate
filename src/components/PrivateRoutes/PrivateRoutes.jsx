import { useContext } from "react";
import { Navigate , useLocation} from "react-router-dom";
import { AuthContext } from "../../Firebase/FirebaseProvider";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()
    console.log('location', location.pathname);


    if (loading) {
        return <h1>loadingggggggggggggggg</h1>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoutes;