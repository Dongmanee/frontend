import HomeClubList from "../components/home/HomeClubList";
import { temp_total_posts } from "../consts/tempData";
import Post from "../components/global/postList/Post";
import Layout from "../components/layouts/Layout";
import { getMemberDetail, getClubList, getScheduleList } from "../apis/member";
import { useUserStore } from "../store/user.store";

import styled from "styled-components";
import { useEffect } from "react";

export default function Posts() {
  const userStore = useUserStore();

  useEffect(() => {
    try {
      getClubList().then((res) => {
        if (res.status === 200) {
          userStore.setClubList(res.data.data);
        }
      });
      getMemberDetail().then((res) => {
        if (res.status === 200) {
          userStore.setName(res.data.data.name);
          userStore.setEmail(res.data.data.email);
        }
      });
      getScheduleList().then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Layout headerLeft="logo" isNavbar={true}>
      <HomeClubList />
      <HomePostListBox>
        {temp_total_posts.map((post, idx) => (
          <Post post={post} key={idx} />
        ))}
      </HomePostListBox>
    </Layout>
  );
}

const HomePostListBox = styled.div`
  height: 100%;
  overflow: scroll;
  & > div {
    margin-top: 30px;
  }
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
