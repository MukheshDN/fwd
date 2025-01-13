import React from 'react';
import './DoctorCards.css';

const DoctorCards = ({ imgSrc, doctorName, description, buttonText, buttonLink }) => {
  return (
    <div className="card doctor-card">
      <img className="card-img-top" src={imgSrc} alt="Doctor" />
      <div className="card-body">
        <h5 className="card-title">{doctorName}</h5>
        <p className="card-text">{description}</p>
        <a href={"/PatientForm"} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default DoctorCards;