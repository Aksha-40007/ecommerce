import axios from 'axios';
import { removeAuthUser } from '../store/slices/authSlice';
import { toast } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: backendUrl
});

const handleErrorResponse = (error, dispatch) => {
  if (error?.response?.status === 401 || error?.response?.status === 403 ) {
    toast.error("Invalid Credentials");
    localStorage.clear();
    dispatch(removeAuthUser());
    window.location.href = "/";
  }
  return Promise.reject(error);
};

// Request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('token'); // Assuming you store token in localStorage
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return handleErrorResponse(error, axiosInstance.defaults.dispatch); // Pass dispatch function
  }
);

export default axiosInstance;
