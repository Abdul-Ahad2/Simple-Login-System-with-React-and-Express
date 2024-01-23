import axios from "axios";

const API_URL = "http://localhost:8000/api/user";

const register = async (userValue) => {
  const response = await axios.post(API_URL, userValue);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const authService = {
  register,
};
