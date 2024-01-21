import { axiosInstance } from "./axiosInstance";

export const registerClub = async ({ data }) => {
  console.log(data)
  return await axiosInstance.post("clubs", {
    data,
  });
};

// 포스트 조회 요청 테스트 성공
export const getPosts = async () => {
  return await axiosInstance.get('clubs/1/posts?category=MAIN_PAGE&size=5')
}
