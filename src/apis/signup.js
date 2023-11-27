import axios from "axios";
export const SERVER_API = "http://43.202.170.12:8080";
export const jsonHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const sendCode = async (enteredEmail) => {
  return await axios.post(
    `${SERVER_API}/signup/code/send`,
    { email: enteredEmail },
    {
      headers: jsonHeader,
    }
  );
};

export const confirmCode = async (enteredEmail, enteredCode) => {
  return await axios.post(
    `${SERVER_API}/signup/code/check`,
    { email: enteredEmail, code: enteredCode.toString() },
    {
      headers: jsonHeader,
    }
  );
};

export const signup = async (data) => {
  return await axios.post(`${SERVER_API}/signup`, data, {
    headers: jsonHeader,
  });
};
