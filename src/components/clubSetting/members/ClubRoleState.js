import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { flexICenter } from "../../../styles/global.style";

export default function ClubRoleState({ role, isSetting }) {
  return (
    <ClubRoleStateLayout>
      {role}
      {isSetting && <IoIosArrowDown />}
    </ClubRoleStateLayout>
  );
}

const ClubRoleStateLayout = styled.div`
  ${flexICenter}
  gap: 0.1rem;
  border: 1px solid ${(props) => props.theme.colors.gray.xs};
  border-radius: 0.5rem;
  font-size: ${(props) => props.theme.sizes.xs};
  padding: 0.3rem;
`;
