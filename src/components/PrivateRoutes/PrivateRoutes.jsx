import { useContext } from "react";
import { Navigate , useLocation} from "react-router-dom";
import { AuthContext } from "../../Firebase/FirebaseProvider";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()
    console.log('location', location.pathname);


    if (loading) {
        return <div className="flex items-center justify-center my-[150px]">
            <div className="md:w-28 md:h-28 w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoutes;