import React from "react";
import "./Myappointments.css";
import Myappointmentcard from "./Myappointmentcard";
import PatientINavbar from "./PatientINavbar";
import PatientNavbar from "./PatientNavbar";
const Myappointment = () => {
  return (
    <div>
        <PatientNavbar/>
    <Myappointmentcard doctorName={"yogesh"} doctorPhoto={"Doctor.jpg"} remarks={"good improvements"}/>
    <Myappointmentcard doctorName={"adithya"} doctorPhoto={"aditya.jpg"} remarks={"good improvements"}/>
    <PatientINavbar/>
    </div>
  );
};

export default Myappointment;