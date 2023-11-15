import styled from "styled-components";

export default function PostBody({ postTitle, postDetail }) {
  return (
    <PostBodyLayout>
      <PostTitleBox>{postTitle}</PostTitleBox>
      <PostDetailBox>{postDetail}</PostDetailBox>
    </PostBodyLayout>
  );
}

const PostBodyLayout = styled.div`
  padding: 15px 0;
`;

const PostTitleBox = styled.div`
  font-weight: 700;
  font-size: 19px;
  margin-bottom: 15px;
`;

const PostDetailBox = styled.div`
  max-height: 100px;
  overflow: hidden;
  margin-bottom: 15px;
`;
