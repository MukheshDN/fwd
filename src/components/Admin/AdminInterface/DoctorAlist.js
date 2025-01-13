import React from "react";
import Doctorcard from "./Doctorcard";
import "./PatientAlist.css";
const DoctorAlist=()=>{
    return(
        <div className="box23">
              <h1
              style={{
              
                textAlign: "center",
                backgroundColor: "rgba( 0, 123, 255,0.85)",
                
              }}
            >
              Doctor List
            </h1>
       <Doctorcard name={"alpash"} phone={"974352668"}/>
       
        </div>

    )
}

export default DoctorAlist;