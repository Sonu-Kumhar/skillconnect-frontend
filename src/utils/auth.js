import axios from "axios";

const API = "http://localhost:5000/api/auth"; // backend base url

export const requireLogin = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("⚠️ Please login first!");
    return false;
  }
  return true;
};

// Register
export const register = async (email, password) => {
  return axios.post(`${API}/register`, { email, password });
};

// Login
export const login = async (email, password) => {
  return axios.post(`${API}/login`, { email, password });
};

// Verify OTP
export const verifyOtp = async (email, otp) => {
  return axios.post(`${API}/verify-otp`, { email, otp });
};

// Forgot Password
export const forgotPassword = async (email) => {
  return axios.post(`${API}/forgot-password`, { email });
};

// Reset Password
export const resetPassword = async (token, newPassword) => {
  return axios.post(`${API}/reset-password`, { token, newPassword });
};
