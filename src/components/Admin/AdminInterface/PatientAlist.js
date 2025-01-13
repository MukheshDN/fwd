import React from "react";
import Patientcard from "./Patientcard";
import "./PatientAlist.css";
const PatientAList=()=>{
    return(
        <div className="box23">
              <h1
              style={{
              
                textAlign: "center",
                backgroundColor: "rgba( 0, 123, 255,0.85)",
                
              }}
            >
              Patients list
            </h1>
        <Patientcard name={"mukhesh"} phone={"9663746863"}/>
        <Patientcard name={"ram"} phone={"9663746863"}/>
        <Patientcard name={"raju"} phone={"9663746863"}/>
        </div>

    )
}

export default PatientAList;