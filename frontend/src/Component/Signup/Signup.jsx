import { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
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
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Signup</h2>

                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={inputs.name}
                    onChange={(e) => {
                        console.log(e.target)
                        setInputs({ ...inputs, name: e.target.value })
                    }
                    }
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={inputs.email}
                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={inputs.password}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />

                <label htmlFor="avatar">Avatar:</label>
                <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    onChange={(e) => {
                        console.log(e.target.files[0])
                        setInputs({ ...inputs, avatar: e.target.files[0] })
                    }
                    }
                />

                <label>Admin:</label>
                <div>
                    <input
                        type="radio"
                        id="admin-yes"
                        name="isAdmin"
                        value="true"
                        checked={inputs.isAdmin === true}
                        onChange={() => setInputs({ ...inputs, isAdmin: true })}
                    />
                    <label htmlFor="admin-yes">Yes</label>

                    <input
                        type="radio"
                        id="admin-no"
                        name="isAdmin"
                        value="false"
                        checked={inputs.isAdmin === false}
                        onChange={() => setInputs({ ...inputs, isAdmin: false })}
                    />
                    <label htmlFor="admin-no">No</label>
                </div>

                <button type="submit" className="btn">
                    Submit
                </button>

                <div className="ooo">
                    <h2>OR</h2>
                </div>

                <h5>Already have an account?</h5>
                <Link to="/login" className="btn1">
                    Login
                </Link>
            </form>
        </div>
    );
};

export default Signup;
