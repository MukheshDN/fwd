import React from 'react';
import './PatientList.css';

const PatientListCard = ({ name, phone }) => {
  return (
    <div className="patient-list-container">
     
      <div className="patient-cards">
        <div className="patient-card">
          <h3>{name}</h3>
          <p><strong>Phone:</strong> {phone}</p>
          <button className="view-button">View</button>
        </div>
      </div>
    </div>
  );
};

export default PatientListCard;
