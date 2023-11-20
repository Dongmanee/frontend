import styled from "styled-components";
import { flexCenter } from "../../../styles/global.style";

export default function OtherApproach() {
  return (
    <OtherApproachLayout>
      <ApproachBox>회원가입</ApproachBox>
      <VerticalLine />
      <ApproachBox>둘러보기</ApproachBox>
    </OtherApproachLayout>
  );
}

const OtherApproachLayout = styled.div`
  ${flexCenter}
  gap: 0.5rem;
`;

const ApproachBox = styled.div`
  text-decoration: underline;
  font-size: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.colors.gray.xs};
`;

const VerticalLine = styled.div`
  border-left: 0.1rem solid ${(props) => props.theme.colors.gray.xs};
  height: 15px;
`;
