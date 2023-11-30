import { axiosInstance } from "./axiosInstance";

export const sendCode = async (enteredEmail) => {
  return await axiosInstance.post("signup/code/send", { email: enteredEmail });
};

export const confirmCode = async (enteredEmail, enteredCode) => {
  return await axiosInstance.post("signup/code/check", {
    email: enteredEmail,
    code: enteredCode.toString(),
  });
};

export const signup = async (data) => {
  return await axiosInstance.post("signup", data);
};
