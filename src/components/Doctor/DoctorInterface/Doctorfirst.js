import React, { Fragment } from "react";
import DoctorNavbar from "./DoctorNavbar";
import PatientList from "./Patientlist";
import PatientINavbar from "../../Patient/PatientInterface/PatientINavbar";


const DoctorFirst=()=>{
 return (
    <Fragment>
    <div>
        <DoctorNavbar/>
        <h1
              style={{
              
                textAlign: "center",
                backgroundColor: "rgba( 0, 123, 255,0.85)",
                
              }}
            >
              Patient list
            </h1>
            <PatientList/>
       
   
    </div>
    <PatientINavbar/>
    </Fragment>
 
 )
}

export default DoctorFirst;