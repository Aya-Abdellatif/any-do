import logo from "../assets/logo.svg";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();

    /*const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);*/
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        //setCurrentUser(null);
        navigate("/signin");
    };

    return (
        <div className="h-15 shadow-md p-10 flex items-center justify-between">
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-30 h-30" />
                </Link>
            </div>
            <div className="flex items-center gap-6 text-gray-600 font-semibold text-lg lg:text-xl">
                <Link to="/" className="hover:text-black">Home</Link>
                {currentUser ? (
                    <>
                        <Link to="/tasks" className="hover:text-black">Tasks</Link>
                        <Link to="/profile" className="hover:text-black">Profile</Link>
                        <button
                            onClick={handleLogout}
                            className="border border-blue-400 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/signin" className="bg-blue-500 text-white px-6 py-2 rounded-3xl hover:bg-blue-600">Sign In</Link>
                        <Link to="/signup" className="border border-blue-400 text-blue-500 px-6 py-2 rounded-3xl hover:bg-blue-500 hover:text-white">Sign Up</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;