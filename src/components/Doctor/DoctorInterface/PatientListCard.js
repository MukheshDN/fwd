import React from 'react';
import './PatientList.css';
import { Link } from 'react-router-dom';

const PatientListCard = ({ name, phone }) => {
  return (
    <div className="patient-list-container">
      <div className="patient-cards">
        <div className="patient-card">
          <h3>{name}</h3>
          <p><strong>Phone:</strong> {phone}</p>
          <Link
            to={{
              pathname: "/PatientDetails",
              state: { name, phone }, // Pass data to the PatientDetails page
            }}
          >
            <button className="view-button">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PatientListCard;
