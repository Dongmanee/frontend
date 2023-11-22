import styled from "styled-components";
import { flexColumn, flexICenter } from "../../../styles/global.style";
import ClubRoleState from "./ClubRoleState";
import ClubRoleDropDown from "./ClubRoleDropDown";

export default function MemberCardInfo({
  name,
  major,
  studentId,
  role,
  registerDate,
  isSetting,
}) {
  return (
    <MemberCardInfoLayout>
      <NameRow>
        <div>{name}</div>
        <ClubRoleDropDown role={role} />
      </NameRow>
      <OtheInfoRow>
        <div>{studentId}</div>
        <div>{major}</div>
        {isSetting && <div>{registerDate} 가입</div>}
      </OtheInfoRow>
    </MemberCardInfoLayout>
  );
}

const MemberCardInfoLayout = styled.div`
  ${flexColumn}
  gap: 0.5rem;
  width: 100%;
`;
const NameRow = styled.div`
  ${flexICenter}
  gap: 0.5rem;
  & > div:first-child {
    font-weight: ${(props) => props.theme.weights.lg};
  }
`;

const OtheInfoRow = styled.div`
  ${flexICenter}
  gap: 0.2rem;
  font-size: ${(props) => props.theme.sizes.xs};
  div:nth-child(n + 2) {
    position: relative;
    margin-left: 1px;
    padding-left: 10px;
  }
  div:nth-child(n + 2)::after {
    position: absolute;
    left: 0;
    content: "·";
  }
`;
