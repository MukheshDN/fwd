import React from "react";
import "./PatientForm.css";

const PatientRemarks = ({ remarks }) => {
  return (
    <div className="patient-remarks">
      <h2>Doctor Remarks</h2>
      <p>{remarks}</p>
    </div>
  );
};

export default PatientRemarks;
