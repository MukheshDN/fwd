import React from "react";
import "./Frontpage.css"
import 'semantic-ui-css/semantic.min.css'; 
import { Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import "../App.css"





const FrontPage = () => {
  
  return (
    <div>
      {/* <Link to="/admin">
      <Button size='massive' style={{ margin :"50px", padding :"50px",backgroundColor:"#2199cc",color: "black",border:"5px #99CC21 solid", borderRadius:"30px"  }}>Admin </Button>
      </Link> */}
      
     
    
      <div className="comp">
  <Link to="/api/v1/Doctor/login ">
   <div className="card" style={{ width: '18rem' }} id="card">
      <img className="card-img-top" src="doctor.jpg" alt="Card image cap"  id="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Doctor Login</h5>
        
        <a href="#" className="btn btn-secondary">LOGIN</a>
      </div>
    </div>


      </Link>
      <Link to="/api/v1/Patient/login ">
      
      <div className="card" style={{ width: '18rem' }} id="card">
      <img className="card-img-top img1" src="patient.jpg" alt="Card image cap" id="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">Patient Login</h5>
        
        <a href="#" className="btn btn-secondary">LOGIN</a>
      </div>
    </div>
      </Link>
      </div>
    </div>
  );
};

export default FrontPage;