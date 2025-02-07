import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

function SignUp() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    role: "Donor",
    bloodGroup: "",
    dob: "",
    gender: "",
    address: "",
    medicalHistory: "",
    lastDonationDate: "",
    agree: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords don't match!!");
      return;
    }

    if (!user.agree) {
      alert("You must agree to the terms and conditions");
      return;
    }

    alert(
      `Congrats ${user.fullName}, you are one step closer to saving someone's life`
    );
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h1>Sign-Up</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            placeholder="Enter your Full Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your Password!"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your Password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={user.role}
            onChange={handleChange}
            required
          >
            <option value="Donor">Donor</option>
            <option value="Recipient">Recipient</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        {user.role !== "Admin" && (
          <div className="form-group">
            <label htmlFor="bloodGroup">Blood Group</label>
            <select
              name="bloodGroup"
              id="bloodGroup"
              value={user.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        )}

        {user.role !== "Admin" && (
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={user.dob}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            value={user.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            value={user.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          ></textarea>
        </div>

        {user.role === "Donor" && (
          <div className="form-group">
            <label htmlFor="medicalHistory">Medical History</label>
            <textarea
              id="medicalHistory"
              name="medicalHistory"
              value={user.medicalHistory}
              onChange={handleChange}
              placeholder="Mention any known medical conditions (optional)"
            ></textarea>
          </div>
        )}

        {user.role === "Donor" && (
          <div className="form-group">
            <label htmlFor="lastDonationDate">Last Donation Date</label>
            <input
              type="date"
              id="lastDonationDate"
              name="lastDonationDate"
              value={user.lastDonationDate}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            name="agree"
            checked={user.agree}
            onChange={handleChange}
            required
          />
          <label htmlFor="agree">I agree to the terms and conditions.</label>
        </div>

        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignUp;