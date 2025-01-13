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
    
      </div>
    
    
    
  
    )

}

export default AdminInterface;
