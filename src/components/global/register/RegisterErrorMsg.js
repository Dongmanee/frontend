import { BiErrorAlt } from "react-icons/bi";
import styled from "styled-components";
import { flexICenter } from "../../../assets/styles/global.style";

export default function RegisterErrorMsg({ errorMsg, margin }) {
  const styles = { margin };
  return (
    <RegisterErrorMsgLayout {...styles}>
      <BiErrorAlt />
      {errorMsg}
    </RegisterErrorMsgLayout>
  );
}

const RegisterErrorMsgLayout = styled.span`
  ${flexICenter}
  gap: 0.3rem;
  margin-top: 0.5rem;
  margin: ${(props) => props.margin};

  font-weight: ${(props) => props.theme.weights.xl};
  font-size: ${(props) => props.theme.sizes.sm};
  color: red;
`;
