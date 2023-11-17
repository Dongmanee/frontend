import styled from "styled-components";
import Post from "../components/global/post/Post";
import HomeClubList from "../components/home/HomeClubList";
import HomeLayout from "../layouts/HomeLayout";

export default function Home() {
  return (
    <HomeLayout headerLeft="logo" headerRight="setting" currentPage="home">
      <HomeClubList />
      <HomePostBox>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </HomePostBox>
    </HomeLayout>
  );
}

const HomePostBox = styled.div`
  height: 100%;
  overflow: scroll;
  & > div {
    margin-top: 30px;
  }
`;
