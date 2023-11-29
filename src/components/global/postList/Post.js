import styled from "styled-components";
import PostBody from "./PostBody";
import PostHead from "./PostHead";
import example from "../../../images/example.png";
import PostBottom from "./PostBottom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Post({ post }) {
  const navigate = useNavigate();
  const [clubInfo, setClubInfo] = useState({
    name: "Import",
    category: "공지",
  });
  const [writerInfo, setWriterInfo] = useState({
    name: "김민지",
    img: example,
  });

  // clubId와 writerId에 따른 ClubInfo와 WriterInfo 세팅 로직 추가 예정

  const onClickPost = (clubId, postId) => {
    console.log("hi");
    navigate(`/club/${clubId}/posts/${postId}`);
  };

  return (
    <PostLayout>
      <PostHead
        clubName={clubInfo.name}
        postCategory={clubInfo.category}
        date={post.date}
      />
      <PostBody
        onClick={() => onClickPost(post.clubId, post.postId)}
        postTitle={post.postTitle}
        postDetail={post.postBody}
      />
      <PostBottom
        writerName={writerInfo.name}
        writerimg={writerInfo.img}
        likesNum={post.likesNum}
        commentNum={post.commentNum}
      />
    </PostLayout>
  );
}

const PostLayout = styled.div``;
