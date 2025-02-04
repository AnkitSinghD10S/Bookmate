import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <form className="form">
        <h2>Login</h2>

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Enter your username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <button type="submit" className="btn">Submit</button>

        <div className="ooo">
          <h2>OR</h2>
        </div>

        <h5>Don't have an account?</h5>
        <a href="./Signup.jsx" className="btn1">Signup</a>
      </form>
    </div>
  );
};

export default Login;
