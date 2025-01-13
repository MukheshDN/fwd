import React from 'react';
import "./PatientAlist.css"


const Patientcard = ({  name, phone }) => {
  return (
    <div className="card1">
      <h3>{name}</h3>
      <p>Phone: {phone}</p>
      <button className="delete-button">Delete</button>
    </div>
  );
};

export default Patientcard;