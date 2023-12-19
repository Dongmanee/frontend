import { axiosInstance } from "./axiosInstance";

export const registerClub = async ({ data }) => {
  return await axiosInstance.post("clubs", {
    data,
  });
};
