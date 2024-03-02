import styled from "styled-components";
import { flexColumn } from "../../../assets/styles/global.style";
import User from "../../global/User";
import { ClubPostComment } from "./ClubPostComment";

export default function ClubPostsDetailComments({ comments }) {
  return (
    <ClubPostsDetailCommentsLayout>
      {comments.map((comment) => (
        <ClubPostComment comment={comment} />
      ))}
    </ClubPostsDetailCommentsLayout>
  );
}

const ClubPostsDetailCommentsLayout = styled.div`
  width: 100%;
  ${flexColumn};
  padding: 20px 0;
  gap: 1rem;
`;
