import Axios from "axios";

const API_BASE_URL = "http://43.202.170.12:8080/";

export const axiosInstance = Axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
