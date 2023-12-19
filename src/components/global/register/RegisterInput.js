import styled from "styled-components";
import { flexColumn } from "../../../styles/global.style";
import { CustomInputLayout } from "../CustomInputs";
import RegisterErrorMsg from "./RegisterErrorMsg";
import RegisterLabel from "./RegisterLabel";

export default function RegisterInput({
  label,
  isRequired,
  errorMsg,
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
        <Registerinput {...register(name)} placeholder={placeholder} type={type} />
        {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
      </RegisterInputBox>
    </RegisterInputLayout>
  );
}

const RegisterInputLayout = styled.div``;

const RegisterInputBox = styled.div`
  ${flexColumn};
`;

const Registerinput = styled(CustomInputLayout)`
  height: 2.5rem;
  border-radius: 0.7rem;
  padding: 0.08rem 1rem;
  font-size: 0.8rem;
`;
