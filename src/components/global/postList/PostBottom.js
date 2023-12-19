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
        commentNum={commentNum}
        isDetail={isDetail}
      />
    </PostBottomLayout>
  );
}

const PostBottomLayout = styled.div`
  ${flexJBetween};
`;
