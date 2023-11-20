import styled from "styled-components";
import ClubUser from "../club/ClubUser";
import { flexICenter } from "../../styles/global.style";

export default function UserProfile({ children, user }) {
  return (
    <UserProfileLayout>
      <ClubUser
        user={user}
        imgSize={"4rem"}
        introColor={"black"}
        size={(props) => props.theme.sizes.lg}
        introSize={(props) => props.theme.sizes.sm}
        gap={"1rem"}
      />
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
    bottom: 15px;
    right: 20px;
  }
`;
