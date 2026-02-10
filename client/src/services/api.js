import axios from "axios";

// Create an axios instance with base URL from environment variable
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to attach JWT token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
