import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/images/more/logo1.png'
import navBg from '../../../assets/images/more/15.jpg'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
const Header = () => {
    const { userProfile } = useContext(AuthContext)
    const navLinks = <>
        <NavLink to='/'><li className="px-3 text-2xl text-white">Home</li></NavLink>
        <NavLink to='/coffee'><li className="px-3 text-2xl text-white">Coffee</li></NavLink>
        <NavLink to='/users'><li className="px-3 text-2xl text-white">Users</li></NavLink>
        <NavLink to='/about'><li className="px-3 text-2xl text-white">About</li></NavLink>
    </>
    return (
        <div style={{ backgroundImage: `url(${navBg})` }} className="navbar lg:px-60 md:px-32 px-10 flex   justify-between ">

            <div className="lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 absolute right-0 shadow bg-gray-400 text-black">
                        {navLinks}

                        <div className="navbar-end ps-4">
                            <Link to='/register'><button className="text-white text-2xl">Register</button></Link>
                            <Link to='/login'><button className="text-white text-2xl">Login</button></Link>
                        </div>

                    </ul>
                </div>

            </div>

            <Link to='/' className="order-first"><img src={logo} className="w-12 h-12" alt="" /></Link>

            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="lg:block hidden">
                {
                    userProfile ? 
                    <button onClick={()=>signOut(auth)} className="text-white text-2xl">LogOut</button>

                :
               <div className=" lg:flex gap-4">
                 <Link to='/register'><button className="text-white text-2xl">Register</button></Link>
                 <Link to='/login'><button className="text-white text-2xl">Login</button></Link>
               </div>
                }
            </div>

        </div>
    );
};

export default Header;