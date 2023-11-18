import styled from "styled-components";
import Post from "../components/global/post/Post";
import HomeClubList from "../components/home/HomeClubList";
import Layout from "../layouts/Layout";

export default function Home() {
  return (
    <Layout headerLeft="logo" headerRight="setting" isNavbar={true}>
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
    </Layout>
  );
}

const HomePostBox = styled.div`
  height: 100%;
  overflow: scroll;
  & > div {
    margin-top: 30px;
  }
`;
