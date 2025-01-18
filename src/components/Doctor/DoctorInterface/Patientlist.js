import React, { useEffect, useState } from 'react';
import './PatientList.css';
import PatientListCard from './PatientListCard';
import api from "../../api.js"; 

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch patient data from the API
    const fetchPatients = async () => {
      try {
        const token = localStorage.getItem("Token");
        if (!token) {
          console.error("No token found, please login.");
          return;
        }

        const response = await api.post("/api/v1/Doctor/getAppointedUsersOfDoctor",{token}); // Replace with your actual API endpoint
        console.log(response.data, "all users");

        if (response.data.success) {
          console.log(response);
          setPatients(response.data.allUser[0].appointedBy);
        } else {
          console.error("Failed to fetch doctor details.");
        }
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      {patients.length > 0 ? (
        patients.map((patient, index) => (
          <PatientListCard key={index} name={patient.name} phone={patient.phone} />
        ))
      ) : (
        <p>Loading patients...</p>
      )}
    </div>
  );
};

export default PatientList;
