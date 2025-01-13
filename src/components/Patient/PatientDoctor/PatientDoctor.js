import React from "react";
import PatientForm from "./PatientForm";
import PatientINavbar from "../PatientInterface/PatientINavbar";
import PatientRemarks from "./PatientRemarks";
import PatientNavbar from "../PatientInterface/PatientNavbar";




const PatientDoctor=()=>{


  return (
    <div>
        <PatientNavbar/>
        <h1
              style={{
              
                textAlign: "center",
                backgroundColor: "rgba( 0, 123, 255,0.85)",
                
              }}
            >
              Patient Form
            </h1>
     
   <PatientForm/>
 
   <PatientINavbar/>
   </div>
  )

}

export default PatientDoctor