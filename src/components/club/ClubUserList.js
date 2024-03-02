import { flexColumn, flexICenter } from "../../assets/styles/global.style";
import User from "../global/User";

import { IoMdRefresh } from "react-icons/io";
import { useParams } from "react-router-dom";
import styled from "styled-components";


export default function ClubUserList({ users }) {
  const { scheduleId } = useParams();

  return (
    <ClubUserListLayout $isClubhome={!scheduleId}>
      {!scheduleId && (
        <div>
          갱신
          <IoMdRefresh size={20} />
        </div>
      )}

      {users.map((user, idx) => (
        <User user={user} key={idx} />
      ))}
    </ClubUserListLayout>
  );
}

const ClubUserListLayout = styled.div`
  ${flexColumn};
  box-sizing: border-box;
  padding: ${(props) => props.$isClubhome && "0 5px"};
  gap: 1rem;

  & > div:first-child {
    ${flexICenter};
    padding-bottom: 10px;
  }
`;
