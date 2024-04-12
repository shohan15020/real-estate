import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Root = () => {
    return (

        <div className="max-w-6xl mx-auto p-4">
            <Nav></Nav>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Root;