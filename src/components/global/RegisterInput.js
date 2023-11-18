import styled from "styled-components";
import CustomInput from "./CustomInputs";
import { FaStarOfLife } from "react-icons/fa6";
import { BiErrorAlt } from "react-icons/bi";

export default function RegisterInput({
  label,
  isRequired,
  errorMsg,
  inputHeight,
}) {
  return (
    <RegisterInputLayout>
      <RegisterLabelBox>
        {label}
        {isRequired && <FaStarOfLife size={8} color="red" />}
      </RegisterLabelBox>
      <RegisterInputBox>
        <CustomInput
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

const RegisterLabelBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${(props) => props.theme.colors.gray.xs};
  margin-bottom: 0.5rem;
`;

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
