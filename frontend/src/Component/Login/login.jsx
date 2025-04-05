import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setAuth } from "../../features/authSlice";

const Login = () => {
  const user = useSelector((state) => state.user?.user || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: user?.email || "",
    password: "",
    role: user?.role || "buyer",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        input,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      dispatch(setAuth(response.data.user));
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error("login failed:", error);
      alert(error.response?.data?.message || "login failed! Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <form
        className=" text-white p-8 border-2 border-gray-700 bg-zinc-800 rounded-lg shadow-lg w-[50%]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold  text-center mb-6">Login</h2>

        <label htmlFor="email" className="block text-white mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          placeholder="Enter your email"
          autoComplete="email"
          className="w-full px-4 py-2 mb-4 border border-gray-700 bg-gray-800 rounded-lg outline-none"
        />

        <label htmlFor="password" className="block text-white mb-1">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          placeholder="Enter your password"
          autoComplete="current-password"
          className="w-full px-4 py-2 mb-4 border bg-gray-800 rounded-md outline-none "
        />

        <label className="block text-white mb-1">Role:</label>
        <div className="flex items-center text-white  gap-4 mb-6">
          <label htmlFor="buyer" className="flex items-center cursor-pointer">
            <input
              type="radio"
              id="buyer"
              name="role"
              value="buyer"
              checked={input.role === "buyer"}
              onChange={(e) => setInput({ ...input, role: e.target.value })}
              className="mr-2 text-white"
            />
            Buyer
          </label>
          <label
            htmlFor="seller"
            className="flex text-white items-center cursor-pointer"
          >
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
          {loading ? "Logging..." : "Login"}
        </button>

        <div className="text-center my-4 text-gray-500">
          <h2>OR</h2>
        </div>

        <p className="text-center text-white">Do not have an account?</p>
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
