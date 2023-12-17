import styled from "styled-components";
import example from "../../../images/sample.png";
import PostBody from "../../global/postList/PostBody";
import PostBottom from "../../global/postList/PostBottom";
import PostHead from "../../global/postList/PostHead";
import { useNavigate } from "react-router-dom";

export default function ClubPost({ post, isClubHome }) {
  const navigate = useNavigate();
  const handlePostDetailClick = (id) => {
    navigate(`${id}`);
  };
  return (
    <ClubPostLayout onClick={() => handlePostDetailClick(post.postId)}>
      {!isClubHome && (
        <PostHead date={post.createdAt} postCategory={post.categoryName} />
      )}

      <PostBody postTitle={post.postTitle} postDetail={post.postBody} />

      <PostBottom
        writerimg={post.writerImg}
        writerName={post.writerName}
        likesNum="35"
        commentNum="10"
      />
    </ClubPostLayout>
  );
}

const ClubPostLayout = styled.div``;
