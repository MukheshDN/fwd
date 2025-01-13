import React, { Fragment, useState } from "react";
import "./Doctorprofile.css"
import DoctorNavbar from './DoctorNavbar'
import api from '../../api';
import { useNavigate } from "react-router-dom";

const DoctorProfile = () => {

    const [qualification, setQualification] = useState("");
    const [experience, setExperience] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [InstituteStudied, setInstitutestudied] = useState("");
    const [clinicAddress, setClinicaddress] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const navigate = useNavigate();
  
    const handleDoctorProfile = async (e) => {
      e.preventDefault();
      try {

       const token = localStorage.getItem("Token");

       if(!token){
        setErrorMessage("No token found");
        
        return;
       }

        const response = await api.post("/api/v1/Doctor/updateDoctorProfile", {
          token,
          qualification,
          experience,
          specialization,
          clinicAddress,
          phonenumber,
          InstituteStudied,
        });
  
        if (response.data.success) {
          alert("Update successful!");
          navigate("/");
        } else {
          setErrorMessage(response.data.message || "Update failed");
        }
      } catch (error) {
        // Handle request errors
        setErrorMessage("An error occurred while logging in. Please try again.");
        console.error(error);
      }
    };


  return (
    <Fragment>
    <div>
        <div>
          <DoctorNavbar/>
        </div>
    <div className="container1 rounded bg-white mt-5 mb-5">
    {errorMessage && (
             <div className="alert alert-danger" role="alert">
                {errorMessage}
            </div>
        )} 
        <form className='new' onSubmit={handleDoctorProfile}>
    <div className="row">
        <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="profilePicture rounded-circle mt-5" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Doctor"/>
                <span className="font-weight-bold">kalandaar</span>
                <span className="text-black-50">kalandar@gmail.com</span>
                <span>diabetic Specialist</span>
            </div>
        </div>
        <div className="col-md-8">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Details</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <label className="labels">Full Name</label>
                        <input type="text" className="form-control"  />
                    </div>
                    <div className="col-md-6">
                        <label className="labels">Specialization</label>
                        <input type="text" className="form-control" value={specialization}
                              onChange={(e) => setSpecialization(e.target.value)}
                              required/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <label className="labels">Qualifications</label>
                        <input type="text" className="form-control" value={qualification}
                              onChange={(e) => setQualification(e.target.value)}
                              required/>
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Institution Studied</label>
                        <input type="text" className="form-control" value={InstituteStudied}
                              onChange={(e) => setInstitutestudied(e.target.value)}
                              required/>
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Years of Experience</label>
                        <input type="text" className="form-control" value={experience}
                              onChange={(e) => setExperience(e.target.value)}
                              required/>
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Contact Number</label>
                        <input type="text" className="form-control"  value={phonenumber}
                              onChange={(e) => setPhonenumber(e.target.value)}
                              required/>
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Email ID</label>
                        <input type="text" className="form-control"  />
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Clinic Address</label>
                        <input type="text" className="form-control" value={clinicAddress}
                              onChange={(e) => setClinicaddress(e.target.value)}
                              required/>
                    </div>
                </div>
                <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="submit">Update Profile</button>

                </div>
            </div>
        </div>
    </div>
    </form>
</div>

    </div>
    </Fragment>
  );
};

export default DoctorProfile;