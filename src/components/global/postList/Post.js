import styled from "styled-components";
import PostBody from "./PostBody";
import PostHead from "./PostHead";
import example from "../../../images/example.png";
import PostBottom from "./PostBottom";

export default function Post({ post }) {
  return (
    <PostLayout>
      <PostHead clubName={post.name} postCategory={post.category} date={post.date} />
      <PostBody postTitle={post.postTitle} postDetail={post.postDetail} />

      <PostBottom
        writerName={post.writerName}
        writerimg={example}
        likesNum={post.likesNum}
        commentNum={post.commentNum}
      />
    </PostLayout>
  );
}

const PostLayout = styled.div``;
