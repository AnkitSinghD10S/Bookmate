import { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
import useSignup from '../../../utils/useSignup';
const Signup = () => {

    const [inputs,setInputs] = useState({
        name:"",
        email:"",
        password:"",
    });

    const {singup} = useSignup();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await singup(inputs);
    }

  return (
    <div className="container">
            <form className="form">
                <h2>Signup</h2>

                <label htmlFor="name">name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={inputs.name}
                    onChange={(e) =>
                        setInputs({ ...inputs, name:e.target.value })
                    }
                />
                <label htmlFor="email">email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
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

                <h5>Already have an account?</h5>
                <Link to="/login" className="btn1">
                    Login
                </Link>
            </form>
        </div>
  )
}

export default Signup