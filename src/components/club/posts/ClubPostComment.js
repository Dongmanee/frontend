import styled from "styled-components";
import User from "../../global/User";
import { flexColumn } from "../../../styles/global.style";

export function ClubPostComment({ comment }) {
  return (
    <ClubPostCommentLayout>
      <User
        user={comment.commentWriter}
        imgSize={"20px"}
        commentDate={comment.commentDate}
        layoutGap={"10px"}
      />
      <div>{comment.commentBody}</div>
    </ClubPostCommentLayout>
  );
}

const ClubPostCommentLayout = styled.div`
  ${flexColumn}
  gap: 0.5rem;

  & > div:last-child {
    font-size: ${(props) => props.theme.sizes.sm};
  }
`;
