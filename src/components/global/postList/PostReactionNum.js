import styled from "styled-components";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa6";
import { flexICenter } from "../../../styles/global.style";

export default function PostReactionNum({ likesNum, commentNum, size }) {
  const styles = { size };
  return (
    <PostReactionNumLayout>
      <ReactionNumBox {...styles}>
        <FaRegHeart />
        <div>{likesNum}</div>
      </ReactionNumBox>
      <ReactionNumBox {...styles}>
        <FaRegCommentDots />
        <div>{commentNum}</div>
      </ReactionNumBox>
    </PostReactionNumLayout>
  );
}

PostReactionNum.defaultProps = {
  size: "13px",
};

const PostReactionNumLayout = styled.div`
  ${flexICenter};
  gap: 10px;
`;

const ReactionNumBox = styled.div`
  ${flexICenter};
  gap: 5px;
  font-size: ${(props) => props.size};
  color: #545454;
`;
