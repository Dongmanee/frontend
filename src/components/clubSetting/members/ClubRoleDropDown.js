import { useState } from "react";
import ClubRoleState from "./ClubRoleState";
import styled from "styled-components";
import { flexColumn, flexICenter } from "../../../assets/styles/global.style";
import { IoIosArrowDown } from "react-icons/io";

const role_data = ["회장", "임원", "회원"];

export default function ClubRoleDropDown({ role }) {
  const [roleState, setRoleState] = useState(role);
  const [isExpanded, setIsExpanded] = useState(false);

  const clickClubRoleBox = () => {
    setIsExpanded((prev) => !prev);
  };

  const clickDropdownItem = (clickedItem) => {
    setRoleState(clickedItem);
    setIsExpanded(false);
  };

  return (
    <RoleDropDownLayout>
      <ClubRoleBox onClick={clickClubRoleBox}>
        {roleState}
        <IoIosArrowDown />
      </ClubRoleBox>
      {isExpanded && (
        <DropDownBox>
          {role_data.map((role) => (
            <DropDownItem onClick={() => clickDropdownItem(role)}>
              {role}
            </DropDownItem>
          ))}
        </DropDownBox>
      )}
    </RoleDropDownLayout>
  );
}

const ClubRoleBox = styled.div`
  ${flexICenter}

  gap: 0.1rem;
  border: 1px solid ${(props) => props.theme.colors.gray.xs};
  border-radius: 0.5rem;
  font-size: ${(props) => props.theme.sizes.xs};
  padding: 0.3rem;
`;

const RoleDropDownLayout = styled.div`
  ${flexColumn}
  position: relative;
`;

const DropDownBox = styled.div`
  width: 100%;
  background-color: white;
  position: absolute;
  top: 1.5rem;
  z-index: 1;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.gray.xs};
  & > div:last-child {
    border: none;
  }
`;

const DropDownItem = styled.div`
  padding: 0.3rem;
  text-align: center;
  font-size: ${(props) => props.theme.sizes.xs};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.xs};
  cursor: pointer;
  &:hover {
    font-weight: ${(props) => props.theme.weights.lg};
  }
`;
