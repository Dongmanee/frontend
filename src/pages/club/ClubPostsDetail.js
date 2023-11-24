import styled from "styled-components";
import ClubPostsDetailBody from "../../components/club/posts/ClubPostsDetailBody";
import ClubPostsDetailComments from "../../components/club/posts/ClubPostsDetailComments";
import ClubPostsDetailHead from "../../components/club/posts/ClubPostsDetailHead";
import ClubPostsDetailsCommentInput from "../../components/club/posts/ClubPostsDetailsCommentInput";
import PostBottom from "../../components/global/postList/PostBottom";
import Layout from "../../layouts/Layout";
import { flexColumn } from "../../styles/global.style";
import usePrevPage from "../../hooks/usePrevPage";

export default function ClubPostsDetail() {
  const { onPrevPage } = usePrevPage();
  return (
    <Layout
      headerLeft={"prev"}
      headerCenter={"Import"}
      headerRight={"edit"}
      onClickLeft={onPrevPage}
    >
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
