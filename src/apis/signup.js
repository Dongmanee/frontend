import axios from "axios";

export const sendCode = async (enteredEmail) => {
  return await axios.post(
    "http://43.202.170.12:8080/signup/code/send",
    { email: enteredEmail },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};

export const confirmCode = async (enteredEmail, enteredCode) => {
  return await axios.post(
    "http://43.202.170.12:8080/signup/code/check",
    { email: enteredEmail, code: enteredCode.toString() },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};

export const setSignup = async (data) => {
  return await axios.post("http://43.202.170.12:8080/signup", data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
