import { IoMdRefresh } from "react-icons/io";
import styled from "styled-components";
import useCheckPath from "../../hooks/useCheckPath";
import { flexColumn, flexICenter } from "../../styles/global.style";
import ClubUser from "./ClubUser";

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
