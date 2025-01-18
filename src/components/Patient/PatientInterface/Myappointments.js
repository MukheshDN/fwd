import React, { useEffect, useState } from "react";
import "./Myappointments.css";
import Myappointmentcard from "./Myappointmentcard";
import PatientINavbar from "./PatientINavbar";
import PatientNavbar from "./PatientNavbar";
import api from "../../api.js"; // Import the api instance

const Myappointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("Token");
        if (!token) {
          console.error("No token found, please login.");
          return;
        }

        const response = await api.post("/api/v1/user/getAppointedDoctorsOfUser", { token });
        console.log(response.data, "appointments data");

        if (response.data.success) {
          setAppointments(response.data.allUser[0].appointedTo);
        } else {
          console.error("Failed to fetch appointment details.");
        }
      } catch (error) {
        console.error("Error fetching appointment details:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <PatientNavbar />
      {appointments.length > 0 ? (
        appointments.map((appointment, index) => (
          <Myappointmentcard
            key={index}
            doctorName={appointment.name}
            doctorPhoto={appointment.doctorPhoto}
            remarks={appointment.remarks}
          />
        ))
      ) : (
        <p>Loading appointments...</p>
      )}
      <PatientINavbar />
    </div>
  );
};

export default Myappointment;
