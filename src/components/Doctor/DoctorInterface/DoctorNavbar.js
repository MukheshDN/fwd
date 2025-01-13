import React from "react";
import "./DoctorNavbar.css"
import { Link } from "react-router-dom";

const DoctorNavbar = () => {
  return (
    <nav className="navbar-container">

      <div className="navbar-logo">
        
      </div>
      <ul className="navbar-links">

        <a href="/Doctordetails">
        <li className="nav-item active">Dashboard</li>
        </a>
        
        
        
      </ul>
      <div className="navbar-actions">
        <div className="search-bar">
          <i className="search-icon fas fa-search"></i>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>
        <i className="icon fas fa-bell"></i>
        <Link to="/api/v1/doctor/login/profile">
        <img
          src="doctor.jpg"
          alt="User Avatar"
          className="avatar"
          
        />
        </Link>
      </div>
    </nav>
  );
};

export default DoctorNavbar;