import styled from "styled-components";
import { flexCenter, flexColumn } from "../../../styles/global.style";
import CustomButton from "../../global/CustomButton";
import RegisterInput from "../../global/register/RegisterInput";
import RegisterButton from "../../global/register/RegisterButton";

export default function SignupForm() {
  return (
    <SignupBox>
      <RegisterInput
        label="아이디를 입력하세요"
        isRequired={true}
        placeholder="8자 이상 입력해주세요"
      />
      <RegisterInput
        label="비밀번호를 입력하세요"
        isRequired={true}
        placeholder="8자 이상 입력해주세요"
      />
      <RegisterInput
        label="비밀번호를 다시 한 번 입력하세요"
        isRequired={true}
        placeholder="8자 이상 입력해주세요"
      />
      <RegisterInput
        label="학번을 입력하세요"
        isRequired={true}
        placeholder="8자 이상 입력해주세요"
      />
      <CustomButton
        height="6vh"
        width="75%"
        bgColor={"#3F3E3E"}
        color="white"
        radius="2rem"
      >
        로그인
      </CustomButton>
    </SignupBox>
  );
}

const SignupBox = styled.div`
  ${flexColumn}
  gap: 2rem;
  padding: 0 2rem;
  margin-top: 1rem;
  & > button {
    position: fixed;
    bottom: 3rem;
  }
`;
