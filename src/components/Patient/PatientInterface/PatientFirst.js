import React, { useEffect, useState } from "react";
import api from "../../api.js"; // Import the api module
import "./PatientInterface.css";
import "./DoctorCardsHoverEffect.css"; // Add hover styles
import PatientINavbar from "./PatientINavbar.js";
import PatientNavbar from "./PatientNavbar.js";
import DoctorCards from "./DoctorsCards.js"; // Corrected file name import
import { useNavigate } from "react-router-dom";

const hoverEffects = [
  "hover-effect-one",
  "hover-effect-two",
  "hover-effect-three",
  "hover-effect-four",
  "hover-effect-five",
]; // Define multiple hover effect classes

const PatientFirst = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch user details from API or LocalStorage
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("Token");
        if (!token) {
          console.error("No token found, please login.");
          return;
        }

        const response = await api.post("/api/v1/user/getDataAboutUserProfile", { token });
        console.log(response);

        if (response.data.success) {
          setUserDetails({
            name: response.data.user.name,
            email: response.data.user.email,
          });
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleNavigate = () => {
    navigate("/api/v1/Patient/login/profile", {
      state: { name: userDetails.name, email: userDetails.email },
    });
  };

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await api.post("api/v1/Doctor/getAllDoctorDetails");
        if (response.data.success) {
          setDoctors(response.data.doctorDetails);
        } else {
          console.error("Failed to fetch doctor details.");
        }
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };

    fetchDoctorDetails();
  }, []);

  return (
    <div>
      <PatientNavbar />
      <div className="container">
        {/* Display user details */}
        <button onClick={handleNavigate}>Go to Profile</button>
      </div>
      <div className="container">
        <div className="doctor-cards-grid">
          {doctors.map((doctor, index) => (
            <div
              className={`cards ${hoverEffects[index % hoverEffects.length]}`} // Apply hover effects dynamically
              key={doctor._id}
            >
              <DoctorCards
                imgSrc={"doctor.jpg"} // Placeholder image
                doctorName={doctor.name}
                description={`Specialization: ${doctor.specialization || "N/A"} | Experience: ${doctor.experience || "N/A"} years`}
                buttonText={"Book Appointment"}
                buttonLink={"/Userdetails/Patientforms"}
              />
            </div>
          ))}
        </div>
      </div>
      <PatientINavbar />
    </div>
  );
};

export default PatientFirst;
