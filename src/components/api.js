import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000", // Your backend base URL
//   withCredentials: true, // Send cookies if required
// });

const api = axios.create({
  baseURL:
  "https://dcb6-2409-40f0-18-5333-1d61-6ac5-7576-344f.ngrok-free.app", // Your backend base URL
  withCredentials: true, // Send cookies if required
});

export default api;
