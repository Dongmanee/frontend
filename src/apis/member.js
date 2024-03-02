import { axiosInstance } from "./axiosInstance";

export const getMember = async (id) => {
  return await axiosInstance.get("members/1");
};

export const getClubList = async () => {
  return await axiosInstance.get("members/clubs");
};

export const getMemberDetail = async () => {
  return await axiosInstance.get("members/details");
};

export const getScheduleList = async () => {
  return await axiosInstance.get("clubs/1/schedules");
};
