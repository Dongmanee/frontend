import styled from "styled-components";
import example from "../../../images/sample.png";
import PostBody from "../../global/postList/PostBody";
import PostBottom from "../../global/postList/PostBottom";
import PostHead from "../../global/postList/PostHead";
import { useNavigate } from "react-router-dom";

export default function ClubPost({ post }) {
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`${id}`);
  };
  return (
    <ClubPostLayout onClick={() => goDetail(post.postId)}>
      <PostHead date={post.createdAt} postCategory={post.categoryName} />
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

const SubTitle = styled.div`
  margin-top: 15px;

  font-size: ${(props) => props.theme.sizes.xl};
  font-weight: ${(props) => props.theme.weights.xl};
`;
