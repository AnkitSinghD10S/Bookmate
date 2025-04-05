import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../features/authSlice';

const Signup = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        avatar: null
    });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.name || !input.email || !input.password || !input.role) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('name', input.name);
            formData.append('email', input.email);
            formData.append('password', input.password);
            formData.append('role', input.role);

            if (input.avatar) {
                formData.append('avatar', input.avatar);
            }

            const response = await axios.post(
                'http://localhost:4000/api/auth/signup',
                formData,
                {
                    withCredentials: true,
                    headers: { 'Content-Type': 'multipart/form-data' }
                }
            );

            console.log(response);
            dispatch(setAuth(response.data.newUser));
            setLoading(false)
            navigate('/verifyEmail')
        } catch (error) {
            console.error("Signup failed:", error);
            alert(error.response?.data?.message || "Signup failed! Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center p-20 min-h-screen bg-gray-800">
            <form  
                className=" text-white p-8 border-2 border-gray-700 bg-zinc-900 rounded-lg shadow-lg w-[50%]"
                onSubmit={handleSubmit} 
            >
                <h2 className="text-2xl font-bold text-white text-center mb-6">Signup</h2>

                <label htmlFor="name" className=" text-white block  mb-1">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={input.name}
                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 mb-4 border outline-none rounded-lg "
                    required
                />

                <label htmlFor="email" className="block text-white mb-1">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={input.email}
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                    className="w-full px-4 py-2 mb-4 border rounded-lg outline-none"
                    required
                />

                <label htmlFor="password" className="block text-white mb-1">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={input.password}
                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 mb-4 border rounded-lg outline-none"
                    required
                />

                <label htmlFor="avatar" className="block text-white mb-1">Avatar:</label>
                <input
                    type="file"
                    accept="image/*"
                    id="avatar"
                    name="avatar"
                    onChange={(e) => setInput({ ...input, avatar: e.target.files[0] })}
                    className="w-full px-4 py-2 mb-4 border rounded-lg cursor-pointer"
                />

                <label className="block text-white mb-1">Role:</label>
                <div className="flex items-center gap-4 mb-6">
                    <label htmlFor="buyer" className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            id="buyer"
                            name="role"
                            value="buyer"
                            checked={input.role === 'buyer'}
                            onChange={(e) => setInput({ ...input, role: e.target.value })}
                            className="mr-2"
                            aria-label="Buyer Role"
                        />
                        Buyer
                    </label>
                    <label htmlFor="seller" className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            id="seller"
                            name="role"
                            value="seller"
                            checked={input.role === 'seller'}
                            onChange={(e) => setInput({ ...input, role: e.target.value })}
                            className="mr-2"
                            aria-label="Seller Role"
                        />
                        Seller
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    {loading ? "Submitting..." : "Submit"}
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
