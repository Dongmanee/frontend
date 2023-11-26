import styled from "styled-components";
import { flexCenter, flexColumn } from "../../../styles/global.style";
import CustomButton from "../../global/CustomButton";
import RegisterInput from "../../global/register/RegisterInput";
import RegisterEmailInput from "./RegisterEmailInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
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
            label="비밀번호를 입력하세요"
            name="password"
            register={register}
            isRequired={true}
            placeholder="8자 이상 입력해주세요"
            type="password"
          />
          <RegisterInput
            name="passwordConfirm"
            register={register}
            label="비밀번호를 다시 한 번 입력하세요"
            type="password"
            isRequired={true}
          />
          {/* 임시 */}
          <RegisterInput
            name="name"
            register={register}
            label="이름을 입력하세요"
            isRequired={true}
          />
          <RegisterInput
            name="department"
            register={register}
            label="학과를 입력하세요"
            isRequired={true}
          />
          <RegisterInput
            name="studentId"
            register={register}
            label="학번을 입력하세요"
            isRequired={true}
          />
          <RegisterInput
            name="birthDate"
            register={register}
            label="생년월일을 입력하세요"
            type="date"
            isRequired={true}
          />
          <RegisterInput
            name="phoneNum"
            register={register}
            label="핸드폰 번호를 입력하세요"
            isRequired={true}
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
  margin-bottom: 3rem;
  overflow: scroll;
`;

const InputCol = styled.div`
  ${flexColumn}
  gap: 2rem;
  margin-bottom: 3rem;
`;
