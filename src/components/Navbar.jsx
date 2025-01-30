import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Rakt
        </NavLink>
        <ul className="navbar-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              FAQs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="login-section">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          SignUp
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
