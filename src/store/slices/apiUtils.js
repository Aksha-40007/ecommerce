import axiosInstance from "../../axios/axiosInstance";
import { toast } from "react-toastify";
import { colors } from "../../assets/styled-components/global/theme";

export const apiRequestHandler = async (url, method, data, token = null) => {
  const headers = {
    'Content-Type': 'application/json'  // Adding Content-Type header
  };
  if (token) {
    headers.Authorization = token;
  }
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      headers,
    });
    return response;
  } catch (error) {
    toastHandler("Something went wrong",error);
    throw error;
  }
};


export const toastHandler = (message, type) => {
  const backgroundColor = type === "success" ? colors.green : colors.red;
  toast[type](message, { backgroundColor });
};
