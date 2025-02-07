import React, { useState } from "react";
import "../styles/donateform.css";

const DonateForm = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCamp, setSelectedCamp] = useState("");
  const [cities, setCities] = useState([]);
  const [camps, setCamps] = useState([]);

  const timeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

  // Mock data for states, cities, and camps
  const states = [
    { name: "Gujarat", cities: ["Ahmedabad", "Baroda", "Surat"] },
    { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nasik"] },
    { name: "UP", cities: ["Prayagraj", "Varanasi", "Lucknow"] },
  ];

  const campData = {
    Ahmedabad: ["Camp A", "Camp B"],
    Baroda: ["Camp C"],
    Surat: ["Camp D", "Camp E"],
    Mumbai: ["Camp F"],
    Pune: ["Camp G", "Camp H"],
    Nasik: ["Camp I"],
    Prayagraj: ["Camp J", "Camp K"],
    Varanasi: ["Camp L"],
    Lucknow: ["Camp M"],
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
    setIsConfirmed(false);
  };

  const handleConfirm = () => {
    if (selectedSlot && selectedCamp) {
      setIsConfirmed(true);
      alert(
        `Slot confirmed for ${selectedSlot} at ${selectedCamp}, ${selectedCity}, ${selectedState}`
      );
    } else {
      alert("Please select a time slot and a camp.");
    }
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity("");
    setSelectedCamp("");
    const stateData = states.find((s) => s.name === state);
    setCities(stateData ? stateData.cities : []);
    setCamps([]);
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setSelectedCamp("");
    setCamps(campData[city] || []);
  };

  const handleCampChange = (e) => {
    setSelectedCamp(e.target.value);
  };

  return (
    <div className="donate-form">
      <h2 className="hero-heading">
        Donate Blood and <span className="highlight">Save Lives!</span>
      </h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name." required />
        </div>

        <div className="form-group">
          <label>Blood Group:</label>
          <select required>
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

        <div className="form-group">
          <label>Preferred Date:</label>
          <input type="date" required />
        </div>

        <div className="form-group">
          <label>Select State:</label>
          <select value={selectedState} onChange={handleStateChange} required>
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        {selectedState && (
          <div className="form-group">
            <label>Select City:</label>
            <select value={selectedCity} onChange={handleCityChange} required>
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedCity && (
          <div className="form-group">
            <label>Select Camp:</label>
            <select value={selectedCamp} onChange={handleCampChange} required>
              <option value="">Select Camp</option>
              {camps.map((camp, index) => (
                <option key={index} value={camp}>
                  {camp}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group">
          <label>Choose a Time Slot:</label>
          <div className="slot-container">
            {timeSlots.map((slot, index) => (
              <div
                key={index}
                className={`slot-box ${
                  selectedSlot === slot ? "selected" : ""
                }`}
                onClick={() => handleSlotSelection(slot)}
              >
                {slot}
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`confirm-btn ${
            selectedSlot && selectedCamp ? "active" : "disabled"
          }`}
          onClick={handleConfirm}
          disabled={!selectedSlot || !selectedCamp}
        >
          Confirm Slot
        </button>
      </form>
    </div>
  );
};

export default DonateForm;
