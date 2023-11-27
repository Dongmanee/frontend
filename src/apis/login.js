import axios from "axios";
import { SERVER_API } from "./signup";

export const login = async ({ email, password }) => {
  return await axios.post(`${SERVER_API}/login`, {
    email: email,
    password: password,
  });
};
