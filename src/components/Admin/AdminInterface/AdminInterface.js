import React, { Fragment } from "react";
import "./AdminInterface.css"
import { Link } from "react-router-dom";


const AdminInterface=()=>{
    return(
        <div>
        <div className="admin-container">
      <h1 className="admin-header">Admin Page</h1>
      <div className="admin-buttons">
        <Link to="/AdminPatient">
        <button className="admin-button patient-button">Patient</button>
        </Link>
        <Link to="/AdminDoctor">
        <button className="admin-button doctor-button">Doctor</button>
        </Link>

     
      </div>
      
    
    </div>
    <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"
        
      id="adminFooter"
     >
        {/* Copyright */}
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2024. All rights reserved.
        </div>

        {/* Social Media Links */}
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    
      </div>
    
    
    
  
    )

}

export default AdminInterface;
