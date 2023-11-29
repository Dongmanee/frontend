import styled from "styled-components";

export default function PostBody({ postTitle, postDetail, onClick }) {
  return (
    <PostBodyLayout onClick={onClick}>
      <PostTitleBox>{postTitle}</PostTitleBox>
      <PostDetailBox>{postDetail}</PostDetailBox>
    </PostBodyLayout>
  );
}

const PostBodyLayout = styled.div`
  padding: 18px 0;
`;

const PostTitleBox = styled.div`
  font-weight: 700;
  font-size: 19px;
  margin-bottom: 15px;
`;

const PostDetailBox = styled.div`
  line-height: 150%;
  margin-bottom: 5px;
`;
