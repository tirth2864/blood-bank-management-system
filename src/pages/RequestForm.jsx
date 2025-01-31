import React, { useState } from "react";
import "../styles/requestform.css";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    bloodType: "",
    hospitalName: "",
    contactNumber: "",
    urgency: "normal",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };

  return (
    <div className="request-blood-container">
      <h1>Request Blood</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name</label>
          <input
            type="text"
            id="patientName"
            value={formData.patientName}
            name="patientName"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Type</label>
          <select
            name="bloodType"
            id="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB+">AB-</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="hospitalName">Hospital Name</label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="urgency">Urgency</label>
          <select
            name="urgency"
            id="urgency"
            value={formData.urgency}
            onChange={handleChange}
            required
          >
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
            <option value="emergency">Emergency</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestForm;
