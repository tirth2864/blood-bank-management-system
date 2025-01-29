import React from "react";
import "../styles/aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p className="about-intro">
          Welcome to <strong>RAKT</strong>, a dedicated platform committed to
          saving lives by connecting blood donors with recipients. Our mission
          is to ensure the availability of safe and sufficient blood supply for
          those in need.
        </p>

        <h2>What we do!</h2>
        <div className="about-services">
          <div className="service-card">🩸 Donor Registration</div>
          <div className="service-card">🏥 Blood Request</div>
          <div className="service-card">📦 Inventory Management</div>
          <div className="service-card">🚨 Emergency Alerts</div>
          <div className="service-card">📢 Donor Awareness and Education</div>
          <div className="service-card">🔒 Secure and Efficient Management</div>
        </div>

        <h2>Why donate blood?</h2>
        <p className="about-facts">
          - <strong>Every 2 seconds</strong>, someone needs our blood. <br />- A{" "}
          <strong>single donation</strong> can save upto{" "}
          <strong>three lives</strong> <br />- Blood{" "}
          <strong>cannot be manufactured</strong>, it only comes from generous
          donors.
        </p>

        <h2>Join us in saving lives</h2>
        <p>
          Be a hero today! Whether you are a donor or a recepient, or a
          supporter your contribution makes a difference. Sign-up now and become
          part of our life-saving network.
        </p>

        <div className="contact-info">
          <p>
            📍 <strong>Location:</strong> India
          </p>
          <p>
            📞 <strong>Contact:</strong> 9876543210
          </p>
          <p>
            📧 <strong>Email:</strong> tirth.prajapati.ts@outlook.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
