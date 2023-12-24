import styled from "styled-components";
import PostReactionNum from "./PostReactionNum";
import PostWriter from "./PostWriter";
import { flexJBetween } from "../../../styles/global.style";

export default function PostBottom({
  writer,
  likesNum,
  isLike,
  commentNum,
  isDetail,
  handleLikeClick,
}) {
  return (
    <PostBottomLayout>
      {writer != undefined && (
        <PostWriter
          writerimg={writer.writerImage}
          writerName={writer.writerName}
        />
      )}
      <PostReactionNum
        likesNum={likesNum}
        isLike={isLike}
        handleLikeClick={handleLikeClick}
        commentNum={commentNum}
        isDetail={isDetail}
      />
    </PostBottomLayout>
  );
}

const PostBottomLayout = styled.div`
  ${flexJBetween};
`;
