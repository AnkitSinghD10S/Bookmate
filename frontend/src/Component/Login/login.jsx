import { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            
            <form 
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Login</h2>

                <label htmlFor="email" className="block text-gray-600 mb-1">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="password" className="block text-gray-600 mb-1">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Submit
                </button>

                <div className="text-center my-4 text-gray-500">
                    <h2>OR</h2>
                </div>

                <p className="text-center text-gray-600">Don't have an account?</p>
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
