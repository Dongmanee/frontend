import styled from "styled-components";
import {
  flexCenter,
  flexColumn,
  flexICenter,
} from "../../../styles/global.style";
import CustomButton from "../../global/CustomButton";
import RegisterInput from "../../global/register/RegisterInput";
import RegisterEmailInput from "./RegisterEmailInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { setSignup } from "../../../apis/signup";

export default function SignupForm() {
  const [authenticatedCode, setAuthenticatedCode] = useState("");
  const { register, handleSubmit, errors, getValues } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    let signupData = {
      universityId: 1,
      studentId: data.studentId,
      department: data.department,
      phone: data.phoneNum,
      email: data.email,
      emailAuthCode: authenticatedCode,
      birth: data.birthDate,
      name: data.name,
      password: data.password,
    };
    setSignup(signupData).then((res) => console.log(res.data));
  };

  return (
    <SignupBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputCol>
          <RegisterEmailInput
            name="email"
            register={register}
            getValues={getValues}
            authenticatedCode={authenticatedCode}
            setAuthenticatedCode={setAuthenticatedCode}
          />
          <RegisterInput
            label="비밀번호"
            name="password"
            register={register}
            isRequired={true}
            placeholder="8~12자의 영문, 숫자, 특수문자만 사용가능합니다"
            type="password"
          />

          <RegisterInput
            name="passwordConfirm"
            register={register}
            label="비밀번호 확인"
            type="password"
            isRequired={true}
            placeholder="비밀번호를 한 번 더 입력해주세요"
          />
          <InputRow>
            <RegisterInput
              name="name"
              register={register}
              label="이름"
              isRequired={true}
              placeholder="이름을 입력해주세요"
            />
            <RegisterInput
              name="birthDate"
              register={register}
              label="생년월일"
              type="date"
              isRequired={true}
            />
          </InputRow>
          <RegisterInput
            name="department"
            register={register}
            label="학과"
            isRequired={true}
            placeholder="학과를 입력해주세요"
          />
          <RegisterInput
            name="studentId"
            register={register}
            label="학번"
            isRequired={true}
            placeholder="학번을 입력해주세요"
          />

          <RegisterInput
            name="phoneNum"
            register={register}
            label="핸드폰 번호"
            isRequired={true}
            placeholder=" '-' 없이 번호만 입력해주세요"
          />
        </InputCol>
        <CustomButton
          type="submit"
          height="3.5rem"
          width="100%"
          bgColor={"#3F3E3E"}
          color="white"
          radius="2rem"
        >
          회원가입
        </CustomButton>
      </form>
    </SignupBox>
  );
}

const SignupBox = styled.div`
  ${flexColumn};
  padding: 0 2rem;
  margin-bottom: 2rem;
`;

const InputCol = styled.div`
  ${flexColumn}
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 45% 50%;
  gap: 5%;
`;
