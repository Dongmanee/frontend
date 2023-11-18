import styled from "styled-components";
import PostBody from "./PostBody";
import PostWriter from "./PostWriter";
import PostHead from "./PostHead";
import PostReactionNum from "./PostReactionNum";
import example from "../../../images/example.png";
import { flexJBetween } from "../../../styles/global.style";

export default function Post({ post }) {
  return (
    <PostLayout>
      <PostHead
        clubName={post.name}
        postCategory={post.category}
        date={post.date}
      />
      <PostBody postTitle={post.postTitle} postDetail={post.postDetail} />
      <PostBottomInfoRow>
        <PostWriter writerimg={example} writerName={post.writerName} />
        <PostReactionNum
          likesNum={post.likesNum}
          commentNum={post.commentNum}
        />
      </PostBottomInfoRow>
    </PostLayout>
  );
}

const PostLayout = styled.div``;

export const PostBottomInfoRow = styled.div`
  ${flexJBetween};
`;
