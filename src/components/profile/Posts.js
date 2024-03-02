import styled from "styled-components";
import { flexColumn } from "../../assets/styles/global.style";
import ClubPost from "../club/posts/ClubPost";

export default function UserPosts() {
  const testData = {
    postTitle: "PWA란?",
    postDate: "2023.12.16",
    postCategoryName: "공지",
    postBody: "내용부분",
    postLikesNum: 15,
    postCommentNum: 30,
  };

  return (
    <UserPostsLayout>
      <ClubPost post={testData} isClubHome={true} />
    </UserPostsLayout>
  );
}

export const UserPostsLayout = styled.div`
  ${flexColumn}
  gap: 50px;
  box-sizing: border-box;
  padding: 15px;
`;
