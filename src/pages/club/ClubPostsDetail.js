import styled from "styled-components";
import ClubPostsDetailBody from "../../components/club/posts/ClubPostsDetailBody";
import ClubPostsDetailComments from "../../components/club/posts/ClubPostsDetailComments";
import ClubPostsDetailHead from "../../components/club/posts/ClubPostsDetailHead";
import ClubPostsDetailsCommentInput from "../../components/club/posts/ClubPostsDetailsCommentInput";
import PostBottom from "../../components/global/postList/PostBottom";
import Layout from "../../layouts/Layout";
import { flexColumn } from "../../styles/global.style";
import usePrevPage from "../../hooks/usePrevPage";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  temp_club_post,
  temp_club_post_comments,
  temp_club_posts,
} from "../../consts/tempData";

export default function ClubPostsDetail() {
  const { onPrevPage } = usePrevPage();
  const state = useLocation().state;
  const [comments, setComments] = useState(temp_club_post_comments);
  const [post, setPost] = useState(temp_club_post);

  return (
    <Layout
      headerLeft={"prev"}
      headerCenter={"Import"}
      onClickLeft={onPrevPage}
    >
      <ClubPostDetailLayout>
        <ClubPostsDetailHead writer={post.postWriter} date={post.postDate} />
        <ClubPostsDetailBody
          postTitle={post.postTitle}
          postBody={post.postBody}
        />
        <PostBottom
          likesNum={post.postLikesNum}
          isLike={post.isLike}
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
