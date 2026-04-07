import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const SignUp = () => {
    const navigate = useNavigate();
    const dots = Array.from({ length: 20 });

    const schema = Yup.object({
        email: Yup.string().email("Invalid email").required("Email is required"),
        fullName: Yup.string().min(3, "At least 3 characters").required("Full name is required"),
        password: Yup.string().min(8, "Minimum 8 characters").required("Password is required")
    });

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            email: "",
            fullName: "",
            password: ""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);

            const users = JSON.parse(localStorage.getItem("users")) || [];

            const isUserExist = users.find(user => user.email === values.email);
            if (isUserExist) {
                console.log(isUserExist);
                alert("User already exists!");
                return;
            }

            users.push(values);
            localStorage.setItem("users", JSON.stringify(users));
            navigate("/signin");
        }
    });


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-xl flex">
                <div className="relative flex-1 bg-gray-50 flex items-center justify-center p-12 overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-4 gap-y-16 gap-x-12 p-12 pt-18 content-start pointer-events-none">
                        {dots.map((_, i) => (
                            i >= 8 && i <= 11 ? (
                                <span key={i} />
                            ) : (
                                <span key={i} className="w-5 h-5 rounded-full bg-gray-300 block" />
                            )
                        ))}
                    </div>

                    <div className="relative z-10 text-center">
                        <img src={logo} alt="logo" width="75" className="m-auto"></img>
                        <h1 className="text-3xl font-bold text-black relative bottom-2.5">
                            Organize it all
                        </h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center px-12 py-14 bg-white">
                    <div className="flex justify-center mb-8">
                        <button className="text-gray-500 hover:text-gray-800 transition">
                        </button>
                        <h2 className="text-xl font-bold text-gray-800">Welcome to Any<span className="text-blue-500">.</span>do</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Email */}
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            className="w-full px-5 py-3.5 rounded-full border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                        <p className="text-red-500 text-sm">
                            {errors.email}
                        </p>

                        {/* Full Name */}
                        <input
                            type="text"
                            placeholder="Full Name"
                            id="fullName"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleChange}
                            className="w-full px-5 py-3.5 rounded-full border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                        <p className="text-red-500 text-sm">
                            {errors.fullName}
                        </p>

                        {/* Password */}
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                className="w-full px-5 py-3.5 rounded-full border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-12"
                            />
                            <p className="text-red-500 text-sm">
                                {errors.password}
                            </p>
                        </div>

                        {/* Submit */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full py-4 rounded-full bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold text-sm tracking-wide transition-all mt-2"
                        >
                            Create Account
                        </button>
                        <p className="text-sm text-center mt-4">
                            Already have an account?{" "}
                            <Link to="/signin" className="text-blue-500">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SignUp;