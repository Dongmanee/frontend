import styled from "styled-components";
import { UserPostsLayout } from "./Posts";
import UserComment from "./Comment";

export default function UserComments() {
  return (
    <UserCommentsLayout>
      <UserComment clubName={"import"} date={"2023.11.10"} />
    </UserCommentsLayout>
  );
}

const UserCommentsLayout = styled(UserPostsLayout)``;
