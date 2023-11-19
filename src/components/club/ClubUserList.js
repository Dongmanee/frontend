import styled from "styled-components";
import ClubUser from "./ClubUser";
import { flexColumn } from "../../styles/global.style";

export default function ClubUserList({ users }) {
  return (
    <ClubUserListLayout>
      {users.map((user, idx) => (
        <ClubUser user={user} key={idx} />
      ))}
    </ClubUserListLayout>
  );
}

const ClubUserListLayout = styled.div`
  ${flexColumn};
  gap: 1rem;
`;
