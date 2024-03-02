import styled from "styled-components";
import example from "../../../assets/images/example.png";
import { flexICenter } from "../../../assets/styles/global.style";
import ApplicationCardInfo from "../applications/ApplicationCardInfo";
import ResignButton from "./ResignButton";
import MemberCardInfo from "./MemberCardInfo";

export default function MemberCard({ userInfo, isSetting }) {
  return (
    <MemberCardLayout>
      <img src={example} />
      <MemberCardInfo
        name={userInfo.name}
        major={userInfo.department}
        studentId={userInfo.studentId}
        role={userInfo.role}
        isSetting={isSetting}
        registerDate={userInfo.registerDate}
      />
      {isSetting && <ResignButton name={userInfo.name} />}
    </MemberCardLayout>
  );
}

const MemberCardLayout = styled.div`
  ${flexICenter}
  gap: 1rem;
  & > img {
    width: 3rem;
    border-radius: 50%;
  }
`;
