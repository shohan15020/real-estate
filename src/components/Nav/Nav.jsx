import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/FirebaseProvider";

const Nav = () => {

    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
    </>

    const { logout, user } = useContext(AuthContext);
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost font-bold normal-case text-3xl">GLASSES</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>



                <div className="navbar-end">

                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://i.ibb.co/y0yrnYQ/1681283571946.jpg"} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName || 'user name not found'}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={logout}
                                        className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Nav;