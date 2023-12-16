import styled from "styled-components";
import { flexColumn } from "../../styles/global.style";
import ClubPost from "../club/posts/ClubPost";

export default function UserPosts() {
  return (
    <UserPostsLayout>
      <ClubPost
        isMine={true}
        title={"import"}
        subTitle={"PWA란?"}
        postCategory={"공지"}
        date={"2023.12.16"}
      />
      <ClubPost
        isMine={true}
        title={"매치포인트"}
        subTitle={"어제 매치포인트 첫 회식!"}
        postCategory={"공지"}
        date={"2023.12.08"}
      />
    </UserPostsLayout>
  );
}

const UserPostsLayout = styled.div`
  ${flexColumn}
  gap: 50px;
  box-sizing: border-box;
  padding: 15px;
`;
