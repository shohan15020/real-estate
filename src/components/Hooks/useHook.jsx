import { useContext } from "react";
import { AuthContext } from "../../Firebase/FirebaseProvider";

const useHook = () => {
    const all = useContext(AuthContext)
    return all;
};

export default useHook;