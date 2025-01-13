import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../api";
import PatientFirst from "./PatientInterface/PatientFirst";

// const UserDetails = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Replace with your backend endpoint
//   const API_ENDPOINT = "http://localhost:5000/";

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         // Token should ideally be fetched from localStorage or cookies
//         const token = localStorage.getItem("Token");

//         if (!token) {
//           setError("No token found. Please log in.");
//           setLoading(false);
//           return;
//         }

//         // Call your backend to get user details
//         const response = await api.post("api/v1/user/getDataAboutUserProfile", {
//           token,
//         });
//         console.log(response.data.user);

//         if (response.data.success) {
//           setUser(response.data.user); // Assuming the user object is returned
//           console.log("i got you");
//         } else {
//           setError(response.data.message || "Failed to fetch user details.");
//         }
//       } catch (err) {
//         setError(err.response?.data?.message || "An error occurred.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p style={{ color: "red" }}>{error}</p>;
//   }

//   return (
//     <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h2>User Profile</h2>
//       <p>
//         <strong>Name:</strong> {user?.name || "N/A"}
//       </p>
//       <p>
//         <strong>Email:</strong> {user?.email || "N/A"}
//       </p>
//       <p>
//         <strong>Role:</strong> {user?.role || "N/A"}
//       </p>
//       <p>
//         <strong>Joined:</strong>{" "}
//         {new Date(user?.createdAt).toLocaleDateString() || "N/A"}
//       </p>
//     </div>
//   );
// };
const UserDetails =()=>{
  return(
    <div>
   <PatientFirst/>
    </div>
  )

}


export default UserDetails;