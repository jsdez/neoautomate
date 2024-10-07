import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import profileImage from '../assets/img/team/Jake-bw-sm.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero section d-flex align-items-center justify-content-center">
      {/* Background overlay */}
      <div className="overlay"></div>

      <div className="container text-center hero-content">
        {/* Hero text area */}
        <div className="profile-title text-uppercase">
          <h2 className="profile-name display-4 mb-4">Jake Dennison</h2>
          <p className="profile-lead lead">Consultant, UX/UI Developer, Solution Architecture & Process Automation Expert.</p>
        </div>

        {/* Info section with Location, Profile Photo, and LinkedIn */}
        <div className="info-section d-flex justify-content-around align-items-center rounded-top-1">
          {/* Location */}
          <div className="location d-flex align-items-center">
            <i className="bi bi-geo-alt-fill me-2"></i> {/* Map pin icon */}
            <span>London, UK</span>
          </div>

          {/* Circular profile image */}
          <div className="profile-image position-relative mx-auto">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-circle img-fluid"
            />
          </div>

          {/* LinkedIn */}
          <div className="linkedin">
            <a href="https://linkedin.com/in/jake-dennison-fcl" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center">
              <i className="bi bi-linkedin me-2"></i> {/* LinkedIn icon */}
              /in/jake-dennison-fcl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
