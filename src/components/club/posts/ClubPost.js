import styled from "styled-components";
import example from "../../../images/sample.png";
import PostBody from "../../global/postList/PostBody";
import PostBottom from "../../global/postList/PostBottom";
import PostHead from "../../global/postList/PostHead";
import { useNavigate } from "react-router-dom";
export default function ClubPost() {
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/club/posts/${id}`);
  };
  return (
    <ClubPostLayout onClick={() => goDetail("123")}>
      <PostHead clubName="모임장 변경 공지사항" date="2023.11.10" postCategory="공지" />
      <PostBody
        postDetail={
          <>
            <p>당분간 오픈채팅방 위주로 운영하려 합니다</p>
            <p>의견 반영이나 모임투표는 오픈채팅방에서 진행하며</p>
          </>
        }
      />

      <PostBottom
        writerimg={example}
        writerName={"alphago"}
        likesNum="35"
        commentNum="10"
      />
    </ClubPostLayout>
  );
}

const ClubPostLayout = styled.div``;
