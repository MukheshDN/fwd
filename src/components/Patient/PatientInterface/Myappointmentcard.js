import React from "react";
import "./Myappointments.css";

const Myappointmentcard = ({ doctorName, doctorPhoto, remarks }) => {
  return (
    <div className="appointment-container">
      <h2>My Appointment</h2>
      <div className="appointment-details">
        <img src={doctorPhoto} alt="Doctor" className="doctor-photo" />
        <p><strong>Doctor:</strong> {doctorName}</p>
        <h3>Doctor Remarks</h3>
        <p>{remarks}</p>
      </div>
    </div>
  );
};
export default Myappointmentcard; 