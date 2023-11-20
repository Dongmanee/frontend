import styled from "styled-components";
import ClubUser from "./ClubUser";
import { flexColumn, flexICenter } from "../../styles/global.style";
import { useLocation } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io";

export default function ClubUserList({ users }) {
  const location = useLocation();
  const isClubhome = location.pathname == "/club";

  return (
    <ClubUserListLayout $isClubhome={isClubhome}>
      {isClubhome && (
        <div>
          갱신
          <IoMdRefresh size={20} />
        </div>
      )}

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

  & > div:first-child {
    ${flexICenter};
    padding-bottom: 10px;
  }
`;
