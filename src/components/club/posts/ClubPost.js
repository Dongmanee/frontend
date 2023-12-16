import styled from "styled-components";
import example from "../../../images/sample.png";
import PostBody from "../../global/postList/PostBody";
import PostBottom from "../../global/postList/PostBottom";
import PostHead from "../../global/postList/PostHead";
import { useNavigate } from "react-router-dom";

export default function ClubPost({ title, subTitle, date, postCategory, isMine }) {
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/club/posts/${id}`);
  };
  return (
    <ClubPostLayout onClick={() => goDetail("123")}>
      <PostHead clubName={title} date={date} postCategory={postCategory} />
      {subTitle && <SubTitle>PWA란?</SubTitle>}
      <PostBody
        postDetail={
          <>
            <p>당분간 오픈채팅방 위주로 운영하려 합니다</p>
            <p>의견 반영이나 모임투표는 오픈채팅방에서 진행하며</p>
          </>
        }
      />

      <PostBottom
        writerimg={!isMine && example}
        writerName={!isMine && "alphago"}
        likesNum="35"
        commentNum="10"
      />
    </ClubPostLayout>
  );
}

const ClubPostLayout = styled.div``;

const SubTitle = styled.div`
  margin-top: 15px;

  font-size: ${(props) => props.theme.sizes.xl};
  font-weight: ${(props) => props.theme.weights.xl};
`;
