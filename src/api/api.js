import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth", // Backend auth routes
});

// Register
export const registerPatient = (data) => API.post("/register/patient", data);
export const registerDoctor = (data) => API.post("/register/doctor", data);
export const registerAdmin = (data) => API.post("/register/admin", data);

// Login
export const loginUser = (data) => API.post("/login", data);
