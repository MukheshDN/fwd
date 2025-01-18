import React, { useEffect, useState } from "react";
import api from '../../api';

const PatientDetails = () => {

  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchPatientData = async (userId) => {
      try {
        const token = localStorage.getItem("Token");
        if (!token) {
          console.error("No token found, please login.");
          return;
        }

        const response = await api.post("/api/v1/user/getUserMedicalDataForDoctor", { token, userId });
        console.log(response.data, "appointments data");

        if (response.data.success) {
          setPatientData(response.data.allUser[0].appointedTo);
        } else {
          console.error("Failed to fetch appointment details.");
        }
      } catch (error) {
        console.error("Error fetching appointment details:", error);
      }
    };

    fetchPatientData();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Patient Details</h2>
      {Object.entries(patientData).map(([key, value]) => (
        <div key={key} style={{ marginBottom: "20px" }}>
          <h3 style={{ margin: "0", textTransform: "capitalize" }}>
            {key.replace(/([A-Z])/g, " $1")}
          </h3>
          <p style={{ margin: "5px 0", color: "#555" }}>{value}</p>
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <label htmlFor="remark" style={{ display: "block", marginBottom: "8px" }}>
          Remark
        </label>
        <textarea
          id="remark"
          name="remark"
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
          placeholder="Enter your remarks here..."
        ></textarea>
      </div>
      <button
        type="button"
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit Remark
      </button>
    </div>
  );
};

export default PatientDetails;