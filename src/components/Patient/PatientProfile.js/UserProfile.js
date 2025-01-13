import React, { useEffect, useState } from "react";
import "./Profile.css";
import PatientNavbar from "../PatientInterface/PatientNavbar";
import api from "../../api.js"; // Import the api module
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"; // Import useLocation

const UserProfile = () => {
  const location = useLocation(); // Access the state passed from PatientFirst.js
  const { name, email } = location.state || { name: "", email: "" }; // Destructure name and email from location.state

  // Set up state for phone number, address, and error message
  const [phonenumber, setPhonenumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Fetch user details on component mount (if needed)
//   useEffect(() => {
//     // Fetch user profile data from the API (optional)
//     const fetchUserDetails = async () => {
//       try {
//         const token = localStorage.getItem("Token");
//         if (!token) {
//           console.error("No token found, please login.");
//           return;
//         }

//         const response = await api.post("/api/v1/user/updateUserProfile", { token,phonenumber, address1, address2, });

//         if (response.data.success) {
//           alert("updated successfully!");
//           console.log(response);
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }
//     };

//     fetchUserDetails();
//   }, []);

  // Handle profile update submission
  const handlePatientProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("Token");

      if (!token) {
        setErrorMessage("No token found");
        setLoading(false);
        return;
      }

      const response = await api.post("/api/v1/user/updateUserProfile", {
        token,
        phonenumber,
        address1,
        address2,
      });

      if (response.data.success) {
        alert("Profile update successful!");
        navigate("/"); // Redirect to dashboard or home
      } else {
        setErrorMessage(response.data.message || "Update failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred while updating. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PatientNavbar />
      <div className="container1 rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="profilePicture rounded-circle mt-5"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="User Avatar"
              />
              <span className="font-weight-bold">{name}</span>
              <span className="text-black-50">{email}</span>
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <form onSubmit={handlePatientProfile}>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      value={name}
                      disabled
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="surname"
                      value=""
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      value={phonenumber}
                      onChange={(e) => setPhonenumber(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 1"
                      value={address1}
                      onChange={(e) => setAddress1(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 2</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="submit">Update Profile</button>
                </div>
              </form>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
