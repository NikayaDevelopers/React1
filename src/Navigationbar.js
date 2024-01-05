import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CardPage from './Components/CardPage';
import Jumbotron from './Components/Jumbotron';
import Contact from './Components/Contact'; // Import Contact component
import CareerSection from './Components/CareerSection'; // Import CareerSection component
import './Navigationbar.css';
import logo from './images/logo.jpg';

function Navigationbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="auto" height="30" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"> {/* Use me-auto to push Contact to the right */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Jumbotron">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CardPage">
                  Services
                </Link>
              </li>
              
              
              {/* New link for CareerSection */}
              <li className="nav-item">
                <Link className="nav-link" to="/Career">
                  Careers
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
              <button className="nav-link btn btn-link btn-primary" onClick={() => window.location.href="/Contact"}> {/* Contact button */} {/* Contact button moved to the right */}
                  Contact Us!
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/CardPage" element={<CardPage />} />
          <Route path="/Jumbotron" element={<Jumbotron />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Route for CareerSection component */}
          <Route path="/Career" element={<CareerSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigationbar;
