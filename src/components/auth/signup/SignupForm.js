import styled from "styled-components";
import { flexCenter, flexColumn } from "../../../styles/global.style";
import CustomButton from "../../global/CustomButton";
import RegisterInput from "../../global/register/RegisterInput";
import RegisterEmailInput from "./RegisterEmailInput";

export default function SignupForm() {
  return (
    <SignupBox>
      <InputCol>
        <RegisterEmailInput />
        <RegisterInput
          label="비밀번호를 입력하세요"
          isRequired={true}
          placeholder="8자 이상 입력해주세요"
        />
        <RegisterInput
          label="비밀번호를 다시 한 번 입력하세요"
          isRequired={true}
        />
      </InputCol>
      <CustomButton
        height="3.5rem"
        width="100%"
        bgColor={"#3F3E3E"}
        color="white"
        radius="2rem"
      >
        회원가입
      </CustomButton>
    </SignupBox>
  );
}

const SignupBox = styled.div`
  ${flexColumn};
  gap: 4rem;
  padding: 0 2rem;
  margin-bottom: 3rem;
`;

const InputCol = styled.div`
  ${flexColumn}
  gap: 2rem;
`;
