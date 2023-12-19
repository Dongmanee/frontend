import { IoMdRefresh } from "react-icons/io";
import styled from "styled-components";
import useCheckPath from "../../hooks/useCheckPath";
import { flexColumn, flexICenter } from "../../styles/global.style";
import User from "../global/User";

export default function ClubUserList({ users }) {
  const { isCheckedPath } = useCheckPath("/club/home");

  return (
    <ClubUserListLayout $isClubhome={isCheckedPath}>
      {isCheckedPath && (
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
