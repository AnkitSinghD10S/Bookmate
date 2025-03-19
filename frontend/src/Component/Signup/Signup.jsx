import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../../utils/useSignup';

const Signup = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        avatar: null,
        isAdmin: false,
    });

    const { signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            
            <form 
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Signup</h2>

                <label htmlFor="name" className="block text-gray-600 mb-1">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={inputs.name}
                    onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                    className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="email" className="block text-gray-600 mb-1">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={inputs.email}
                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="password" className="block text-gray-600 mb-1">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={inputs.password}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="avatar" className="block text-gray-600 mb-1">Avatar:</label>
                <input
                    type="file"
                    accept="image/*"
                    id="avatar"
                    name="avatar"
                    onChange={(e) => setInputs({ ...inputs, avatar: e.target.files[0] })}
                    className="w-full px-4 py-2 mb-4 border rounded-lg cursor-pointer"
                />
                <label className="block text-gray-600 mb-1">Buyer :</label>
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="admin-yes"
                            name="isAdmin"
                            value="true"
                            checked={inputs.isAdmin === true}
                            onChange={() => setInputs({ ...inputs, isAdmin: true })}
                            className="mr-2"
                        />
                        <label htmlFor="admin-yes" className="text-gray-600">Yes</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="admin-no"
                            name="isAdmin"
                            value="false"
                            checked={inputs.isAdmin === false}
                            onChange={() => setInputs({ ...inputs, isAdmin: false })}
                            className="mr-2"
                        />
                        <label htmlFor="admin-no" className="text-gray-600">No</label>
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Submit
                </button>

                <div className="text-center my-4 text-gray-500">
                    <h2>OR</h2>
                </div>

                <p className="text-center text-gray-600">Already have an account?</p>
                <Link 
                    to="/login" 
                    className="block text-center text-blue-500 hover:underline mt-2"
                >
                    Login
                </Link>
            </form>
        </div>
    );
};

export default Signup;
