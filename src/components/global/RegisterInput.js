import styled from "styled-components";
import CustomInput from "./CustomInputs";
import { BiErrorAlt } from "react-icons/bi";
import RegisterLabel from "../home/RegisterLabel";

export default function RegisterInput({
  label,
  isRequired,
  errorMsg,
  inputHeight,
  id,
}) {
  return (
    <RegisterInputLayout>
      <RegisterLabel id={id} label={label} isRequired={isRequired} />
      <RegisterInputBox>
        <CustomInput
          id={id}
          height={inputHeight ? inputHeight : "2.5rem"}
          radius="0.7rem"
        />
        {errorMsg && (
          <span>
            <BiErrorAlt />
            {errorMsg}
          </span>
        )}
      </RegisterInputBox>
    </RegisterInputLayout>
  );
}

const RegisterInputLayout = styled.div``;

const RegisterInputBox = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-top: 0.5rem;
    font-weight: ${(props) => props.theme.weights.xl};
    color: red;
  }
`;
