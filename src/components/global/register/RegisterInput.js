import styled from "styled-components";
import CustomInput from "../CustomInputs";
import RegisterLabel from "./RegisterLabel";
import RegisterErrorMsg from "./RegisterErrorMsg";

export default function RegisterInput({
  label,
  isRequired,
  errorMsg,
  inputHeight,
  id,
  placeholder,
}) {
  return (
    <RegisterInputLayout>
      <RegisterLabel id={id} label={label} isRequired={isRequired} />
      <RegisterInputBox>
        <CustomInput
          id={id}
          height={inputHeight ? inputHeight : "2.5rem"}
          radius="0.7rem"
          placeholder={placeholder}
        />
        {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
      </RegisterInputBox>
    </RegisterInputLayout>
  );
}

const RegisterInputLayout = styled.div``;

const RegisterInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;
