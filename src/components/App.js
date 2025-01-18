import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import '@fortawesome/fontawesome-free/css/all.min.css';



import FrontPage from "./FrontPage.js";
import Admin from "./Admin/Admin.js";
import Patient from "./Patient/Patient.js";
import Doctor from "./Doctor/Doctor.js";
import DoctorRegister from "./Doctor/DoctorRegister.js";
import PatientRegister from "./Patient/PatientRegister.js";
import Footer from "./Footer/Footer.js";
import NavBar from "../components/NavBar/NavBar.js";
import UserDetails from "./Patient/UserDetails.js";
import PatientFirst from "./Patient/PatientInterface/PatientFirst.js";
import ArticlesComponent from "./info/ArticlesComponent.js";
import MedicalQnA from "./info/MedicalQna.js";
import UserProfile from "./Patient/PatientProfile.js/UserProfile.js";
import PatientDoctor from "./Patient/PatientDoctor/PatientDoctor.js";
import Myappointment from "./Patient/PatientInterface/Myappointments.js";
import DoctorFirst from "./Doctor/DoctorInterface/Doctorfirst.js";
import DoctorProfile from "./Doctor/DoctorInterface/Doctorprofile.js";
import AdminInterface from "./Admin/AdminInterface/AdminInterface.js";
import PatientAList from "./Admin/AdminInterface/PatientAlist.js";
import DoctorAlist from "./Admin/AdminInterface/DoctorAlist.js";
import PatientDetails from "./Doctor/DoctorInterface/PatientDetails.js";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <FrontPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Articles"
            element={
              <div>
                <ArticlesComponent/>
              </div>
            }
          />
           <Route
            path="/MedicalQna"
            element={
              <div>
                <MedicalQnA/>
              </div>
            }
          />
             <Route
            path="/Patientform"
            element={
              <div>
                <PatientDoctor/>
              </div>
            }
          />
             <Route
            path="/Myappointments"
            element={
              <div>
                <Myappointment/>
              </div>
            }
          />
             <Route
            path="/Doctordetails"
            element={
              <div>
                <DoctorFirst/>
              </div>
            }
          />
            <Route
            path="/AdminInterface"
            element={
              <div>
                <AdminInterface/>
              </div>
            }
          />
             <Route
            path="/AdminPatient"
            element={
              <div>
                <PatientAList/>
              </div>
            }
          />

            <Route
            path="/AdminDoctor"
            element={
              <div>
                <DoctorAlist/>
              </div>
            }
          />

            <Route
            path="/PatientDetails"
            element={
              <div>
                <PatientDetails/>
              </div>
            }
          />
          
          <Route path="/api/v1/Admin/login" element={<Admin />} />
          <Route path="/api/v1/Doctor/login" element={<Doctor />} />
          <Route path="/api/v1/Patient/login" element={<Patient />} />
          <Route path="/api/v1/Patient/login/profile" element={<UserProfile />} />
          <Route path="/api/v1/Doctor/login/profile" element={<DoctorProfile />} />
          <Route path="/api/v1/Doctor/register" element={<DoctorRegister />} />
          <Route path="/UserDetails" element={<UserDetails/>}/>
          <Route
            path="/api/v1/Patient/register"
            element={<PatientRegister />}
          />
         
        </Routes>
      </Router>
     
      
    
      
    </div>
  );
}

export default App;
