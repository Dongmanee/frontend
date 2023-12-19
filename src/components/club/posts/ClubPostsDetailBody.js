import styled from "styled-components";
import PostBody from "../../global/postList/PostBody";

export default function ClubPostsDetailBody() {
  return (
    <ClubPostsDetailBodyLayout>
      <PostBody
        postTitle={"어제 매치포인트 첫 회식!"}
        postDetail={"Lorem ipsum dolor sit amet, consectetur adipiscing"}
      />
    </ClubPostsDetailBodyLayout>
  );
}

const ClubPostsDetailBodyLayout = styled.div`
  width: 100%;
`;
