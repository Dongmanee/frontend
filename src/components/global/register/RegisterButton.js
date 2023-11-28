import styled from "styled-components";
import { flexCenter } from "../../../styles/global.style";

export default function RegisterButton({ children, width }) {
  return <RegisterButtonLayout $width={width}>{children}</RegisterButtonLayout>;
}

RegisterButton.defaultProps = {
  width: "90%",
};

const RegisterButtonLayout = styled.button`
  height: 7vh;
  width: ${(props) => props.$width};
  ${flexCenter}
  border-radius: 1rem;
  position: fixed;
  bottom: 1rem;
  background-color: ${(props) => props.theme.colors.dark.sm};
  color: white;
  font-size: ${(props) => props.theme.sizes.lg};
  font-family: "Noto Sans KR", sans-serif;
`;
