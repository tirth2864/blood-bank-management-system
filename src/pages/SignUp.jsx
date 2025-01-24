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
    addres: "",
    medicalHistory: "",
    lastDonationDate: "",
    agree: "false",
  });
}

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
    alert("Passwords dont match!!");
    return;
  }

  if (!user.agree) {
    alert("You must agree to the terms and condition");
    return;
  }

  alert(
    `Congrats ${user.fullName}, you are one step closer to save life of someone`
    );
    navigate("/login");
};


export default SignUp;
