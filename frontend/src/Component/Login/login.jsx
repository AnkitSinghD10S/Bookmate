import { useState } from "react";
import "./login.css";
import useLogin from "../../../utils/useLogin.js";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const {login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(inputs);
    };

    console.log(inputs);

    return (
        <div className="container">
            <form className="form">
                <h2>Login</h2>

                <label htmlFor="email">email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your username"
                    value={inputs.email}
                    onChange={(e) =>
                        setInputs({ ...inputs, email: e.target.value })
                    }
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={inputs.password}
                    onChange={(e) =>
                        setInputs({ ...inputs, password: e.target.value })
                    }
                />

                <button type="submit" className="btn" onClick={handleSubmit}>
                    Submit
                </button>

                <div className="ooo">
                    <h2>OR</h2>
                </div>

                <h5>Don't have an account?</h5>
                <a href="./Signup.jsx" className="btn1">
                    Signup
                </a>
            </form>
        </div>
    );
};

export default Login;
