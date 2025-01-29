import React from "react";
import "../styles/footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; 2025 Blood Bank Management. All Rights Reserved.
      </p>
      <div className="footer-links">
        <NavLink to="/about" className="footer-link">About Us</NavLink>
        <NavLink to="/contact" className="footer-link">Contact</NavLink>
        <NavLink to="/privacy" className="footer-link">Privacy Policy</NavLink>
      </div>
    </footer>
  );
}

export default Footer;