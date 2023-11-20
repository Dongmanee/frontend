import { BiErrorAlt } from "react-icons/bi";
import styled from "styled-components";
import { flexICenter } from "../../../styles/global.style";

export default function RegisterErrorMsg({ errorMsg }) {
  return (
    <RegisterErrorMsgLayout>
      <BiErrorAlt />
      {errorMsg}
    </RegisterErrorMsgLayout>
  );
}

const RegisterErrorMsgLayout = styled.span`
  ${flexICenter}
  gap: 0.3rem;
  margin-top: 0.5rem;
  font-weight: ${(props) => props.theme.weights.xl};
  color: red;
`;