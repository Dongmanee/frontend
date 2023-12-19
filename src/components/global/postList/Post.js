import styled from "styled-components";
import PostBody from "./PostBody";
import PostHead from "./PostHead";
import example from "../../../images/example.png";
import PostBottom from "./PostBottom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Post({ post }) {
  const navigate = useNavigate();

  // clubId와 writerId에 따른 ClubInfo와 WriterInfo 세팅 로직 추가 예정

  const onClickPost = (clubId, postId) => {
    navigate(`/club/${clubId}/posts/${postId}`);
  };

  return (
    <PostLayout>
      <PostHead
        clubName={post.club.clubName}
        postCategory={post.postCategoryName}
        date={post.postDate}
      />
      <PostBody
        onClick={() => onClickPost(post.club.clubId, post.postId)}
        postTitle={post.postTitle}
        postDetail={post.postBody}
      />
      <PostBottom
        writer={post.postWriter}
        likesNum={post.postLikesNum}
        isLike={post.isLike}
        commentNum={post.postCommentNum}
      />
    </PostLayout>
  );
}

const PostLayout = styled.div``;
