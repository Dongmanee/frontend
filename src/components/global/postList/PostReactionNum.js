import styled from "styled-components";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa6";

export default function PostReactionNum({ likesNum, commentNum }) {
  return (
    <PostReactionNumLayout>
      <ReactionNumBox>
        <FaRegHeart />
        <div>{likesNum}</div>
      </ReactionNumBox>
      <ReactionNumBox>
        <FaRegCommentDots />
        <div>{commentNum}</div>
      </ReactionNumBox>
    </PostReactionNumLayout>
  );
}

const PostReactionNumLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ReactionNumBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: #545454;
`;
