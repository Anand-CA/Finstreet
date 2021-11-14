import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navLogo__container">
          <Link to="/home">
            <img className="navLogo" src="/images/logo.png" alt="" />
          </Link>
        </div>

        <div className="navQuote">
          <p className="navQuote__text">
            "All our dreams can come true— if we have the courage to pursue
            them."
          </p>
        </div>

        <div className="">
          <button onClick={logoutUser} className="navBtn">
            <span>Hello, </span>
            {user.username}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
