import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">
      <section className="dashboard-hero">
        <h1 className="hero-heading">
          Welcome,
          <br />
          <span className="highlight">
            You are one step closer to save someone's life!!
          </span>
        </h1>
        <p className="hero-description">
          Join us in making a difference! Whether you are a donor or a
          recipient, our platforms connect you to a community dedicated to
          saving lives!!
        </p>
        <div className="hero-buttons">
          <NavLink to="/donate" className="primary-button">
            Donate Now
          </NavLink>
          <NavLink to="/request" className="secondary-button">
            Request Blood
          </NavLink>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-heading">How it Works!</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">1</div>
            <h3 className="step-title">Register</h3>
            <p className="step-description">
              Sign up as a donor or recipient and create your profile.
            </p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3 className="step-title">Connect</h3>
            <p className="step-description">
              Find donors or recipient in your area through our platform
            </p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3 className="step-title">Save lives</h3>
            <p className="step-description">
              Coordinate donation and help save lives in your community.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-description">
              Hear what our donors and recipients have to say about their
              experience with us!
            </p>
          </div>
          <div className="testimonials-grid">
            <figure className="testimonial">
              <blockquote className="testimonial-quote">
                <h3 className="testimonial-title">
                  Truly a lifechanging experience.
                </h3>
                <p>
                  "I have never realised how easy it was to donate blood and
                  save life. The platform connected me with someone in need, and
                  it was such a rewarding experience!"
                </p>
              </blockquote>
              <figcaption className="testimonial-author">
                <div className="avatar">
                  <img
                    src="https://avatar.iran.liara.run/public/36"
                    alt="User avatar"
                    className="avatar-image"
                  />
                </div>
                <div className="author-info">
                  <span className="author-name">John Doe</span> <br />
                  <span className="author-role">Blood Donor</span>
                </div>
              </figcaption>
            </figure>
            <figure className="testimonial">
              <blockquote className="testimonial-quote">
                <h3 className="testimonial-title">Saved my life</h3>
                <p>
                  "Thanks to this platform, I found a donor when I needed the
                  most. I am forever grateful for their help and kindness."
                </p>
              </blockquote>
              <figcaption className="testimonial-author">
                <div className="avatar">
                  <img
                    src="https://avatar.iran.liara.run/public/37"
                    alt="User avatar"
                    className="avatar-image"
                  />
                </div>
                <div className="author-info">
                  <span className="author-name">Jane Smith</span> <br />
                  <span className="author-role">Blood Recipient</span>
                </div>
              </figcaption>
            </figure>
            <figure className="testimonial">
              <blockquote className="testimonial-quote">
                <h3 className="testimonial-title">A Seamless Process</h3>
                <p>
                  "The process was so simple and efficient. I highly recommend
                  anyone who can donate to it. It's and incredible way to help
                  others!"
                </p>
              </blockquote>
              <figcaption className="testimonial-author">
                <div className="avatar">
                  <img
                    src="https://avatar.iran.liara.run/public/38"
                    alt="User avatar"
                    className="avatar-image"
                  />
                </div>
                <div className="author-info">
                  <span className="author-name">Michael Lee</span> <br />
                  <span className="author-role">Blood Donor</span>
                </div>
              </figcaption>
            </figure>
            <figure className="testimonial">
              <blockquote className="testimonial-quote">
                <h3 className="testimonial-title">Forever Grateful</h3>
                <p>
                  "I cannot thank this platform enough for helping me during an
                  emergency. The support was immediate, and the donors were
                  amazing."
                </p>
              </blockquote>
              <figcaption className="testimonial-author">
                <div className="avatar">
                  <img
                    src="https://avatar.iran.liara.run/public/39"
                    alt="User avatar"
                    className="avatar-image"
                  />
                </div>
                <div className="author-info">
                  <span className="author-name">Emily Clark</span> <br />
                  <span className="author-role">Blood Recipient</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
