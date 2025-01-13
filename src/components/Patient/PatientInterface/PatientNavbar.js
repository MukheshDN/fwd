import React, { useEffect, useState } from "react";
import "./PatientNavbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../api.js"; // Import the api module

const PatientNavbar = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from API or LocalStorage
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("Token");
        if (!token) {
          console.error("No token found, please login.");
          return;
        }

        const response = await api.post("/api/v1/user/getDataAboutUserProfile", 
          {token},
        );
        console.log(response);

        if (response.data.success) {
          setUserDetails({
            name: response.data.user.name,
            email: response.data.user.email,
          });
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleNavigate = () => {
    navigate("/api/v1/Patient/login/profile", {
      state: { name: userDetails.name, email: userDetails.email },
    });
  };


  return (
    <nav className="navbar-container">

      <div className="navbar-logo">
        
      </div>
      <ul className="navbar-links">

        <a href="/UserDetails">
        <li className="nav-item active">Dashboard</li>
        </a>
        <Link to="/Myappointments">
        <li className="nav-item active ">Myappointments</li>
        </Link>
        <li className="nav-item active">services Provided</li>
        <li className="nav-item acitve">Our achievements</li>
        
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
        <button onClick={handleNavigate}><img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="User Avatar"
          className="avatar"
          
        /></button>
        
        
      </div>
    </nav>
  );
};

export default PatientNavbar;
