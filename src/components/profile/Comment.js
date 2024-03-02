import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { flexColumn, flexICenter } from "../../assets/styles/global.style";
import PostHead from "../global/postList/PostHead";

export default function UserComment({ clubName, date }) {
  return (
    <UserCommentLayout>
      <PostHead clubName={clubName} date={date} />
      <CommentBox>재밌는 글이네요~ 잘보고 갑니다!</CommentBox>
      <CommentBottom>
        <div>공지</div>
        <div>어제 매치포인트 첫 회식!</div>
        <IoIosArrowForward size={14} />
      </CommentBottom>
    </UserCommentLayout>
  );
}

const UserCommentLayout = styled.div`
  ${flexColumn};
`;

const CommentBox = styled.div`
  margin: 10px 0;
`;

const CommentBottom = styled.div`
  ${flexICenter};
  margin-top: 6px;
  gap: 5px;
  cursor: pointer;

  div {
    font-size: ${(props) => props.theme.sizes.xs};
    color: ${(props) => props.theme.colors.gray.sm};
  }

  div:first-child {
    padding: 5px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.gray.xxs};
  }
`;
