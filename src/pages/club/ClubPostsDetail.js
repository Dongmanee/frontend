import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ClubPostsDetailBody from "../../components/club/posts/ClubPostsDetailBody";
import ClubPostsDetailComments from "../../components/club/posts/ClubPostsDetailComments";
import ClubPostsDetailHead from "../../components/club/posts/ClubPostsDetailHead";
import ClubPostsDetailsCommentInput from "../../components/club/posts/ClubPostsDetailsCommentInput";
import PostBottom from "../../components/global/postList/PostBottom";
import { temp_club_post, temp_club_post_comments } from "../../consts/tempData";
import usePrevPage from "../../hooks/usePrevPage";
import Layout from "../../layouts/Layout";
import { flexColumn } from "../../styles/global.style";

export default function ClubPostsDetail() {
  const { onPrevPage } = usePrevPage();
  const navigate = useNavigate();
  const { clubId } = useParams();
  const [comments, setComments] = useState(temp_club_post_comments);
  const [post, setPost] = useState(temp_club_post);
  const [isLike, setIsLike] = useState(post.isLike);
  const [clubName, setClubName] = useState("Import");

  const handleLogoClick = () => {
    navigate(`/club/${clubId}`);
  };

  const handleLikeClick = () => {
    setIsLike((prev) => !prev);
  };

  return (
    <Layout
      headerLeft={"prev"}
      headerCenter={clubName}
      onClickLeft={onPrevPage}
      onClickCenter={handleLogoClick}
    >
      <ClubPostDetailLayout>
        <ClubPostsDetailHead writer={post.postWriter} date={post.postDate} />
        <ClubPostsDetailBody
          postTitle={post.postTitle}
          postBody={post.postBody}
        />
        <PostBottom
          likesNum={post.postLikesNum}
          isLike={isLike}
          handleLikeClick={handleLikeClick}
          commentNum={post.postCommentNum}
          isDetail={true}
        />
        <ClubPostsDetailComments comments={comments} />

        <ClubPostsDetailsCommentInput />
      </ClubPostDetailLayout>
    </Layout>
  );
}

const ClubPostDetailLayout = styled.div`
  ${flexColumn};
  gap: 0.5rem;
  padding: 0 5px;
`;
