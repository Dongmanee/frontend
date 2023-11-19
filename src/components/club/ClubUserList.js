import styled from "styled-components";
import ClubUser from "./ClubUser";
import { flexColumn } from "../../styles/global.style";
import { useLocation } from "react-router-dom";

export default function ClubUserList({ users }) {
  const location = useLocation();
  const isClubhome = location.pathname == "/club";

  return (
    <ClubUserListLayout $isClubhome={isClubhome}>
      {users.map((user, idx) => (
        <ClubUser user={user} key={idx} />
      ))}
    </ClubUserListLayout>
  );
}

const ClubUserListLayout = styled.div`
  ${flexColumn};
  box-sizing: border-box;
  padding: ${(props) => props.$isClubhome && "20px"};
  gap: 1rem;
`;
