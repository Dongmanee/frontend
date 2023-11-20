import styled from "styled-components";
import PostReactionNum from "./PostReactionNum";
import PostWriter from "./PostWriter";
import { flexJBetween } from "../../../styles/global.style";

export default function PostBottom({ writerimg, writerName, likesNum, commentNum }) {
  return (
    <PostBottomLayout>
      <PostWriter writerimg={writerimg} writerName={writerName} />
      <PostReactionNum likesNum={likesNum} commentNum={commentNum} />
    </PostBottomLayout>
  );
}

const PostBottomLayout = styled.div`
  ${flexJBetween};
`;
