import styled from "styled-components";
import CustomInput from "../../global/CustomInputs";
import CustomButton from "../../global/CustomButton";
import { flexColumn } from "../../../styles/global.style";

export default function LoginForm() {
  return (
    <LoginFormBox>
      <CustomInput
        height="5vh"
        radius="1rem"
        padding="0.3rem 1.2rem"
        placeholder="이메일을 입력하세요"
      />
      <CustomInput
        height="5vh"
        radius="1rem"
        padding="0.3rem 1.2rem"
        placeholder="비밀번호를 입력하세요"
      />
      <CustomButton
        height="6vh"
        width="100%"
        bgColor={"#3F3E3E"}
        color="white"
        radius="2rem"
      >
        로그인
      </CustomButton>
    </LoginFormBox>
  );
}

const LoginFormBox = styled.div`
  ${flexColumn}
  gap: 1.5rem;
`;
