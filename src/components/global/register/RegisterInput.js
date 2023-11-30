import styled from "styled-components";
import { flexColumn } from "../../../styles/global.style";
import CustomInput from "../CustomInputs";
import RegisterErrorMsg from "./RegisterErrorMsg";
import RegisterLabel from "./RegisterLabel";

export default function RegisterInput({
  label,
  isRequired,
  errorMsg,
  inputHeight,
  id,
  placeholder,
  register,
  name,
  type,
}) {
  return (
    <RegisterInputLayout>
      <RegisterLabel id={id} label={label} isRequired={isRequired} />
      <RegisterInputBox>
        <CustomInput
          name={name}
          register={register}
          id={id}
          height={inputHeight ? inputHeight : "2.5rem"}
          radius="0.7rem"
          placeholder={placeholder}
          type={type}
        />
        {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
      </RegisterInputBox>
    </RegisterInputLayout>
  );
}

const RegisterInputLayout = styled.div``;

const RegisterInputBox = styled.div`
  ${flexColumn};
`;
