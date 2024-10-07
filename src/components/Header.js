import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="bg-light shadow-sm py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          Neo Automate
        </Link>

        {/* Navbar */}
        <nav className="d-none d-lg-block">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item mx-2">
              <Link to="#hero" className="nav-link">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="#about" className="nav-link">About</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="#services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="#portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="#contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
