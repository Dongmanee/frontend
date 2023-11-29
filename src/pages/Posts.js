import styled from "styled-components";
import HomeClubList from "../components/home/HomeClubList";
import Layout from "../layouts/Layout";
import { temp_total_posts } from "../consts/tempData";
import Post from "../components/global/postList/Post";

export default function Posts() {
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
`;
