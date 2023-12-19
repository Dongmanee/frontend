import styled from "styled-components";
import { FaRegCommentDots, FaRegHeart, FaHeart } from "react-icons/fa6";
import { flexICenter } from "../../../styles/global.style";

export default function PostReactionNum({
  likesNum,
  isLike,
  commentNum,
  isDetail,
  size,
}) {
  const styles = { size };
  return (
    <PostReactionNumLayout>
      <ReactionNumBox $isDetail={isDetail}>
        {isLike ? <FaHeart /> : <FaRegHeart />}
        <div>{likesNum}</div>
      </ReactionNumBox>
      <ReactionNumBox $isDetail={isDetail}>
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
  gap: ${(props) => (props.$isDetail ? "8px" : "5px")};
  font-size: ${(props) => (props.$isDetail ? "18px" : "13px")};
  color: #545454;
`;
