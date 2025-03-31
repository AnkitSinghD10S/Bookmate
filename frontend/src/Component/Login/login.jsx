import { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Login = () => {
    const user = useSelector((state) => state.user?.user || {}); 
    const [input, setInput] = useState({
        email: user?.email || "",
        password: "",
        role: user?.role || "buyer",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", input);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form 
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
                onSubmit={handleSubmit} 
            >
                <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Login</h2>

                <label htmlFor="email" className="block text-gray-600 mb-1">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="password" className="block text-gray-600 mb-1">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={input.password}
                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label className="block text-gray-600 mb-1">Role:</label>
                <div className="flex items-center gap-4 mb-6">
                    <label htmlFor="buyer" className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            id="buyer"
                            name="role"
                            value="buyer"
                            checked={input.role === "buyer"}
                            onChange={(e) => setInput({ ...input, role: e.target.value })}
                            className="mr-2"
                        />
                        Buyer
                    </label>
                    <label htmlFor="seller" className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            id="seller"
                            name="role"
                            value="seller"
                            checked={input.role === "seller"}
                            onChange={(e) => setInput({ ...input, role: e.target.value })}
                            className="mr-2"
                        />
                        Seller
                    </label>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Login
                </button>

                <div className="text-center my-4 text-gray-500">
                    <h2>OR</h2>
                </div>

                <p className="text-center text-gray-600">Do not have an account?</p>
                <Link 
                    to="/signup" 
                    className="block text-center text-blue-500 hover:underline mt-2"
                >
                    Signup
                </Link>
            </form>
        </div>
    );
};

export default Login;
