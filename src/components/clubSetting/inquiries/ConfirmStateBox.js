import styled from "styled-components";
import { flexCenter } from "../../../styles/global.style";

export default function ConfirmStateBox({ isConfirm }) {
  return (
    <ConfirmStateBoxLayout $isConfirm={isConfirm}>
      {isConfirm ? "답변완료" : "답변대기"}
    </ConfirmStateBoxLayout>
  );
}

const ConfirmStateBoxLayout = styled.div`
  ${flexCenter}
  min-width: 2.5rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.gray.xxs};
  padding: 0.5rem;
  color: ${(props) => (props.$isConfirm ? "#ff5b57" : "#86CD4d")};
  font-size: ${(props) => props.theme.sizes.xxs};
  font-weight: ${(props) => props.theme.weights.lg};
`;
