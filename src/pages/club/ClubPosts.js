import styled from "styled-components";
import ClubPost from "../../components/club/posts/ClubPost";
import ClubPostsCategory from "../../components/club/posts/ClubPostsCategory";
import PenIcon from "../../components/global/PenIcon";
import { flexCenter, flexColumn } from "../../styles/global.style";

export default function ClubPosts() {
  return (
    <ClubPostsLayout>
      <ClubPostsCategory />

      <ClubPostsCol>
        <ClubPost />
        <ClubPost />
      </ClubPostsCol>

      <PenIcon />
    </ClubPostsLayout>
  );
}

const ClubPostsLayout = styled.div`
  ${flexColumn};
`;

const ClubPostsCol = styled.div`
  ${flexColumn};
  margin-top: 20px;
  gap: 40px;
`;
