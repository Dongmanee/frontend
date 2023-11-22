import styled from "styled-components";
import example from "../../../images/example.png";
import { flexCenter, flexICenter } from "../../../styles/global.style";
import ApplicationCardInfo from "./ApplicationCardInfo";

export default function ApplicationCard({ applicationInfo }) {
  return (
    <ApplicationCardLayout>
      <img src={example} />
      <ApplicationCardInfo
        name={applicationInfo.name}
        major={applicationInfo.major}
        studentId={applicationInfo.id}
      />
      <DetailApplicationButton>지원서 보러가기</DetailApplicationButton>
    </ApplicationCardLayout>
  );
}

const ApplicationCardLayout = styled.div`
  ${flexICenter}
  justify-content: space-between;
  gap: 1rem;
  & > img {
    width: 3rem;
    border-radius: 50%;
  }
`;

const DetailApplicationButton = styled.div`
  ${flexCenter}
  min-width: 4.5rem;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.gray.xxs};
  font-size: ${(props) => props.theme.sizes.xxs};
`;
