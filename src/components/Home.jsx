import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
                A simple to do list <br />
                to manage it all
                </h1>

                <div className="w-40 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>

                <p className="text-gray-600 mt-6 text-lg">
                    Easily manage your personal tasks, family projects, and team’s work all in one place and stay productive.
                </p>

                <div className="mt-8 flex justify-center">
                    <Link to="/tasks" className="inline-block mt-6 bg-blue-500 text-white w-40 px-6 py-5 rounded-lg hover:bg-blue-600">
                    Go to Tasks
                    </Link>
                </div>

            </div>
        </div>
    </>
  );
}

export default Home;