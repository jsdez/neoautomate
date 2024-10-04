import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        {/* Logo section */}
        <Link to="/" className="logo d-flex align-items-center me-auto">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src={require('../assets/img/logo.png')} alt="Logo" /> */}
          <h1 className="sitename">Neo Automate</h1>
        </Link>

        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="#hero" className="active">Home</Link></li>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#services">Services</Link></li>
            <li><Link to="/PortfolioDetails" className="active">Portfolio</Link></li>
            <li><Link to="#team">Team</Link></li>

            {/* Dropdown Menu */}
            <li className="dropdown">
              <Link to="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
              <ul>
                <li><Link to="#">Dropdown 1</Link></li>
                <li className="dropdown">
                  <Link to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                  <ul>
                    <li><Link to="#">Deep Dropdown 1</Link></li>
                    <li><Link to="#">Deep Dropdown 2</Link></li>
                    <li><Link to="#">Deep Dropdown 3</Link></li>
                    <li><Link to="#">Deep Dropdown 4</Link></li>
                    <li><Link to="#">Deep Dropdown 5</Link></li>
                  </ul>
                </li>
                <li><Link to="#">Dropdown 2</Link></li>
                <li><Link to="#">Dropdown 3</Link></li>
                <li><Link to="#">Dropdown 4</Link></li>
              </ul>
            </li>

            <li><Link to="#contact">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {/* Call to Action Button */}
        <Link className="cta-btn" to="#about">Get Started</Link>

      </div>
    </header>
  );
};

export default Header;
