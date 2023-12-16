import styled from "styled-components";
import User from "../global/User";
import { flexICenter } from "../../styles/global.style";

export default function UserProfile({ children, user, childrenBottom, isAddedFriend }) {
  return (
    <UserProfileLayout $childrenBottom={childrenBottom}>
      <User
        user={user}
        imgSize={"4rem"}
        introColor={"black"}
        size={(props) => props.theme.sizes.lg}
        introSize={(props) => props.theme.sizes.sm}
        gap={"1rem"}
      />
      {isAddedFriend && <DeleteFriendBtn>친구삭제</DeleteFriendBtn>}
      <div>{children}</div>
    </UserProfileLayout>
  );
}

const UserProfileLayout = styled.div`
  width: 92%;
  height: 15vh;
  ${flexICenter};

  box-sizing: border-box;
  position: fixed;
  background-color: white;

  & > div:last-child {
    position: absolute;
    bottom: ${({ $childrenBottom }) => ($childrenBottom ? $childrenBottom : "15px")};
    right: 20px;
  }
`;

const DeleteFriendBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  text-decoration: underline;
  font-size: ${(props) => props.theme.sizes.xs};
  color: ${(props) => props.theme.colors.red.md};
`;
