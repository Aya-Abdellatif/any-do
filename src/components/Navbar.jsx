import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="h-15 shadow-md p-10 flex items-center justify-between">
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-30 h-30"/>
                </Link>
            </div>
            <div className="flex items-center gap-6 text-gray-700 font-medium">
                <Link to="/" className="hover:text-blue-500">Home</Link>
                <Link to="/tasks" className="hover:text-blue-500">Tasks</Link>
                <Link to="/profile" className="hover:text-blue-500">Profile</Link>
            </div>
        </div>
    );
};

export default Navbar;