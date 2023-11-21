import styled from "styled-components";
import { flexColumn, flexICenter } from "../../../styles/global.style";

export default function ApplicationCardInfo({ name, major, studentId }) {
  return (
    <ApplicationCardInfoLayout>
      <div>{name}</div>
      <div>
        <div>{studentId}</div>
        <div> &middot;</div>
        <div>{major}</div>
      </div>
    </ApplicationCardInfoLayout>
  );
}

const ApplicationCardInfoLayout = styled.div`
  ${flexColumn}
  gap: 0.5rem;
  width: 100%;
  & > div:first-child {
    font-weight: ${(props) => props.theme.weights.xl};
  }
  & > div:last-child {
    ${flexICenter}
    gap: 0.2rem;
    font-size: ${(props) => props.theme.sizes.xs};
  }
`;
