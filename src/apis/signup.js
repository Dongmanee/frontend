import { axiosInstance } from "./axiosInstance";

export const sendCode = async (enteredEmail) => {
  return await axiosInstance.post("signup/emails/verification-code", { email: enteredEmail });
};

export const confirmCode = async (enteredEmail, enteredCode) => {
  return await axiosInstance.post("signup/emails/confirm", {
    email: enteredEmail,
    code: enteredCode.toString(),
  });
};

export const signup = async (data) => {
  return await axiosInstance.post("signup", data);
};
