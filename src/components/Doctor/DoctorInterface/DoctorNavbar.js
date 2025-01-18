import React, { useEffect, useState } from "react";
import "./DoctorNavbar.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../api.js"; // Import the api module

const DoctorNavbar = () => {

  const [doctorDetails, setDoctorDetails] = useState({
    name: "",
    email: "",
    specialization: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from API or LocalStorage
    const fetchDoctorDetails = async () => {
      try {
        const token = localStorage.getItem("Token");
        if (!token) {
          console.error("No token found, please login.");
          return;
        }

        const response = await api.post("/api/v1/Doctor/getDoctorProfile", 
          {token},
        );
        console.log(response);

        if (response.data.success) {
          setDoctorDetails({
            name: response.data.doctorDetails.name,
            email: response.data.doctorDetails.email,
            specialization: response.data.doctorDetails.specialization,
          });
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchDoctorDetails();
  }, []);

  const handleNavigate = () => {
    navigate("/api/v1/doctor/login/profile", {
      state: { name: doctorDetails.name, email: doctorDetails.email,  specialization: doctorDetails.specialization},
    });
  };

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
        <button onClick={handleNavigate}>
        <img
          src="doctor.jpg"
          alt="User Avatar"
          className="avatar"
          
        /></button>
      </div>
    </nav>
  );
};

export default DoctorNavbar;