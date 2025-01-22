import React from "react";
import Doctorcard from "./Doctorcard";
import "./PatientAlist.css";
const DoctorAlist=()=>{
    return(
      <section>
        <div className="box23">
              <h1
              style={{
              
                textAlign: "center",
                backgroundColor: "#00b3b3",
                
              }}
            >
              Doctor List
            </h1>
       <Doctorcard name={"alpash"} phone={"974352668"}/>
       <Doctorcard name={"alpash"} phone={"974352668"}/>
       
       
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

      </section>

    )
}

export default DoctorAlist;