import styled from "styled-components";
import { flexColumn, flexICenter } from "../../assets/styles/global.style";
import User from "../global/User";

export default function UserProfile({ children, user, isAddedFriend, isMyProfile }) {
  return (
    <UserProfileLayout>
      <User
        user={user}
        imgSize={"4rem"}
        introColor={"black"}
        size={(props) => props.theme.sizes.lg}
        introSize={(props) => props.theme.sizes.sm}
        gap={"1rem"}
      />

      <ButtonsCol isAddedFriend={isAddedFriend} isMyProfile={isMyProfile}>
        {isAddedFriend && <DeleteFriendBtn>친구삭제</DeleteFriendBtn>}
        <div>{children}</div>
      </ButtonsCol>
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
`;

const DeleteFriendBtn = styled.div`
  cursor: pointer;

  text-decoration: underline;
  font-size: ${(props) => props.theme.sizes.xs};
  color: ${(props) => props.theme.colors.red.md};
`;

const ButtonsCol = styled.div`
  width: 50%;
  height: 60%;
  ${flexColumn};
  justify-content: ${(props) => (props.isAddedFriend ? "space-between" : "flex-end")};
  justify-content: ${(props) => props.isMyProfile && "center"};
  align-items: flex-end;
`;
