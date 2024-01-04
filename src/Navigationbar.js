import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CardPage from './Components/CardPage';
import Jumbotron from './Components/Jumbotron'; // Import AboutUs component if available
import './Navigationbar.css'; // Import CSS for Navigationbar
import logo from './images/logo.jpg'

function Navigationbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> {/* Use 'fixed-top' class for sticky behavior */}
        <div className="container-fluid">
          {/* Navbar content */}
          <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" width="auto" height="30" /> </Link>
          {/* Adjust width and height */}
            
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* Navbar links */}
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Jumbotron">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CardPage">Services</Link>
              </li>
              <li className="nav-item dropdown">
                {/* Dropdown links */}
                {/* ... */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content">
        {/* Content goes here */}
        <Routes>
          
          <Route path="/CardPage" element={<CardPage />} />
          <Route path="/Jumbotron" element={<Jumbotron />} />
          {/* Additional routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default Navigationbar;
