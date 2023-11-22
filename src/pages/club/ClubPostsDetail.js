import styled from "styled-components";
import ClubPostsDetailBody from "../../components/club/posts/ClubPostsDetailBody";
import ClubPostsDetailComments from "../../components/club/posts/ClubPostsDetailComments";
import ClubPostsDetailHead from "../../components/club/posts/ClubPostsDetailHead";
import ClubPostsDetailsCommentInput from "../../components/club/posts/ClubPostsDetailsCommentInput";
import PostBottom from "../../components/global/postList/PostBottom";
import Layout from "../../layouts/Layout";
import { flexColumn } from "../../styles/global.style";

export default function ClubPostsDetail() {
  return (
    <Layout headerLeft={"prev"} headerCenter={"Import"} headerRight={"edit"}>
      <ClubPostDetailLayout>
        <ClubPostsDetailHead />
        <ClubPostsDetailBody />
        <PostBottom likesNum={"35"} commentNum={"10"} size={"22px"} />
        <ClubPostsDetailComments />

        <ClubPostsDetailsCommentInput />
      </ClubPostDetailLayout>
    </Layout>
  );
}

const ClubPostDetailLayout = styled.div`
  ${flexColumn};
  padding: 0 5px;
`;