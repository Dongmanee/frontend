import styled from "styled-components";
import ClubPostsDetailBody from "../../components/club/posts/ClubPostsDetailBody";
import ClubPostsDetailComments from "../../components/club/posts/ClubPostsDetailComments";
import ClubPostsDetailHead from "../../components/club/posts/ClubPostsDetailHead";
import ClubPostsDetailsCommentInput from "../../components/club/posts/ClubPostsDetailsCommentInput";
import PostBottom from "../../components/global/postList/PostBottom";
import { flexColumn } from "../../styles/global.style";

export default function ClubPostsDetail() {
  return (
    <ClubPostDetailLayout>
      <ClubPostsDetailHead />
      <ClubPostsDetailBody />
      <PostBottom likesNum={"35"} commentNum={"10"} size={"22px"} />
      <ClubPostsDetailComments />

      <ClubPostsDetailsCommentInput />
    </ClubPostDetailLayout>
  );
}

const ClubPostDetailLayout = styled.div`
  ${flexColumn};
  padding: 0 5px;
`;
