import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioDetails from './pages/PortfolioDetails';
import ServiceDetails from './pages/ServiceDetails';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/service-details" element={<ServiceDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
