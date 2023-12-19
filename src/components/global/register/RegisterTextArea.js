import styled from "styled-components";
import RegisterLabel from "./RegisterLabel";
import { flexColumn } from "../../../styles/global.style";
import RegisterErrorMsg from "./RegisterErrorMsg";

export default function RegisterTextArea({
  id,
  label,
  isRequired,
  height,
  placeholder,
  name,
  register,
  errorMsg,
}) {
  return (
    <RegisterTextAreaLayout>
      <RegisterLabel id={id} label={label} isRequired={isRequired} />
      <RegisterTextAreaBox
        {...register(name)}
        $height={height}
        placeholder={placeholder}
      />
      {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
    </RegisterTextAreaLayout>
  );
}

const RegisterTextAreaLayout = styled.div`
  ${flexColumn}
`;

const RegisterTextAreaBox = styled.textarea`
  height: ${(props) => (props.$height ? props.$height : "5rem")};
  background-color: ${(props) => props.theme.colors.gray.xxs};
  border-radius: 0.7rem;
  border: none;
  padding: 1rem;
  resize: none;

  font-family: "Noto Sans KR", sans-serif;
  font-size: ${(props) => props.theme.sizes.xs};
`;
