import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000", // Your backend base URL
//   withCredentials: true, // Send cookies if required
// });

const api = axios.create({
  baseURL:
  "https://2ac8-2409-40f2-1040-9504-45b6-71cb-b57f-6acb.ngrok-free.app", // Your backend base URL
  withCredentials: true, // Send cookies if required
});

export default api;
