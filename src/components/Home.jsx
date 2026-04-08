import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    }, []);

    return (
        <>
            <div className="pt-40 flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
                        A simple to do list <br />
                        to manage it all
                    </h1>

                    <div className="w-40 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>

                    <p className="text-gray-600 mt-6 text-2xl mb-15">
                        Easily manage your personal tasks, family projects, and <br></br>team’s work all in one place and stay productive.
                    </p>

                    <div className="mt-8 flex justify-center">
                        {currentUser ? (<Link to="/tasks" className="bg-blue-500 text-white px-15 py-2 rounded-3xl text-2xl font-semibold hover:bg-blue-600">
                            Go to Tasks
                        </Link>) : (<Link to="/signup" className="bg-blue-500 text-white px-15 py-2 rounded-3xl text-2xl font-semibold hover:bg-blue-600">
                            Get Started. It's FREE
                        </Link>)}
                    </div>
                    <p className="text-gray-600 mt-6 text-lg">
                        Free Forever. No credit card.
                    </p>

                </div>
            </div>
        </>
    );
}

export default Home;