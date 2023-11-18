import styled from "styled-components";
import example from "../../images/sample.png";
import { PostBottomInfoRow } from "../global/postList/Post";
import PostBody from "../global/postList/PostBody";
import PostHead from "../global/postList/PostHead";
import PostReactionNum from "../global/postList/PostReactionNum";
import PostWriter from "../global/postList/PostWriter";
const ClubPost = () => {
  return (
    <ClubPostLayout>
      <PostHead clubName="모임장 변경 공지사항" date="2023.11.10" />
      <PostBody
        postDetail={
          <>
            <p>당분간 오픈채팅방 위주로 운영하려 합니다</p>
            <p>의견 반영이나 모임투표는 오픈채팅방에서 진행하며</p>
          </>
        }
      />
      <PostBottomInfoRow>
        <PostWriter writerimg={example} writerName={"alphago"} />
        <PostReactionNum likesNum={"35"} commentNum={"10"} />
      </PostBottomInfoRow>
    </ClubPostLayout>
  );
};

export default ClubPost;

const ClubPostLayout = styled.div``;
