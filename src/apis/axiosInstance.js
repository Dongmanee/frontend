import Axios from "axios";
import { getCookie } from "../utils/cookies";

const API_BASE_URL = "http://43.202.170.12:8080/";

const isCookie = getCookie("accessToken") != undefined;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

if (isCookie) {
  headers.Authorization = `Bearer ${getCookie("accessToken")}`;
}

export const axiosInstance = Axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: headers,
});
