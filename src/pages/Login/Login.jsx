import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [user, setUser] = useState(localStorage.getItem("user"));

  //   check user exist
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [navigate, user]);

  //   submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
    );
    navigate("/home");
  };

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <h5>Welcome back! Please login to your account</h5>

        <div className="field">
          <label>Username</label>
          <input
            type="text"
            ref={usernameRef}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="field">
          <label>Password</label>
          <input
            type="password"
            ref={passwordRef}
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="rememberMe">
          <input id="check" type="checkbox" hidden />
          <label className="custom-checkbox" htmlFor="check"></label>
          <label htmlFor="check" className="rememberMe__text">
            Remember me
          </label>
        </div>

        <p className="forgotPassword">Forgot password?</p>

        <button className="formBtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
