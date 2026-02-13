import axios from "axios";

// Use environment variable for backend base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000", // fallback for local dev
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request interceptor: attach JWT token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor: handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or unauthorized → redirect to login
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
