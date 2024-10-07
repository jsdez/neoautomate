import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Neo Automate</h5>
          </div>
        </div>
        <div className="text-center mt-3">
          &copy; 2024 Neo Automate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
