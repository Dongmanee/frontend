import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { signup } from "../../../apis/signup";
import { flexColumn } from "../../../styles/global.style";
import {
  kakaoSignupSchema,
  signupSchema,
} from "../../../utils/validationSchema";
import CustomButton from "../../global/CustomButton";
import RegisterInput from "../../global/register/RegisterInput";
import RegisterEmailInput from "./RegisterEmailInput";
import RegisterSelect from "../../global/register/RegisterSelect";

export default function SignupForm() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const kakaoInfos = {
    email: params.get("email"),
    code: params.get("code"),
    provider: params.get("provider"),
    externalProviderId: params.get("externalProviderId"),
  };
  const isKaKaoLogin = kakaoInfos.provider == "kakao";

  const [authenticatedCode, setAuthenticatedCode] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    control,
  } = useForm({
    mode: "onBlur",
    resolver: isKaKaoLogin
      ? yupResolver(kakaoSignupSchema)
      : yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    const commonBody = {
      universityId: data.university,
      name: data.name,
      birth: data.birthDate,
      department: data.department,
      studentId: data.studentId,
      phone: data.phoneNum,
    };

    if (isKaKaoLogin) {
      const body = {
        email: kakaoInfos.email,
        emailAuthCode: kakaoInfos.code,
        provider: kakaoInfos.provider,
        externalProviderId: kakaoInfos.externalProviderId,
        ...commonBody,
      };
      signup(body).then((res) => console.log(res.data));
    } else {
      if (authenticatedCode == "")
        setError(
          "email",
          { message: "이메일 인증을 해주세요" },
          { shouldFocus: true }
        );
      else {
        const body = {
          email: data.email,
          emailAuthCode: authenticatedCode,
          password: data.password,
          ...commonBody,
        };
        signup(body).then((res) => console.log(res.data));
      }
    }
  };

  return (
    <SignupBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputCol>
          {isKaKaoLogin ? (
            ""
          ) : (
            <>
              <RegisterEmailInput
                name="email"
                register={register}
                getValues={getValues}
                authenticatedCode={authenticatedCode}
                setAuthenticatedCode={setAuthenticatedCode}
                setError={setError}
                errorMsg={errors.email && errors.email.message}
              />

              <RegisterInput
                name="password"
                register={register}
                type="password"
                label="비밀번호"
                isRequired={true}
                placeholder="8~12자의 영문, 숫자, 특수문자만 사용가능합니다"
                errorMsg={errors.password && errors.password.message}
              />
              <RegisterInput
                name="passwordConfirm"
                register={register}
                type="password"
                label="비밀번호 확인"
                isRequired={true}
                placeholder="비밀번호를 한 번 더 입력해주세요"
                errorMsg={
                  errors.passwordConfirm && errors.passwordConfirm.message
                }
              />
            </>
          )}

          <InputRow>
            <RegisterInput
              name="name"
              register={register}
              label="이름"
              isRequired={true}
              placeholder="이름을 입력해주세요"
              errorMsg={errors.name && errors.name.message}
            />
            <RegisterInput
              name="birthDate"
              register={register}
              label="생년월일"
              type="date"
              isRequired={true}
              errorMsg={errors.birthDate && errors.birthDate.message}
            />
          </InputRow>

          <InputRow>
            <RegisterSelect
              name="university"
              control={control}
              label="학교"
              isRequired={true}
              errorMsg={errors.university && errors.university.message}
            />
            <RegisterInput
              name="studentId"
              register={register}
              label="학번"
              isRequired={true}
              placeholder="학번을 입력해주세요"
              errorMsg={errors.studentId && errors.studentId.message}
            />
          </InputRow>
          <RegisterInput
            name="department"
            register={register}
            label="학과"
            isRequired={true}
            placeholder="학과를 입력해주세요"
            errorMsg={errors.department && errors.department.message}
          />

          <RegisterInput
            name="phoneNum"
            register={register}
            label="핸드폰 번호"
            isRequired={true}
            placeholder=" '-' 없이 번호만 입력해주세요"
            errorMsg={errors.phoneNum && errors.phoneNum.message}
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
  margin-bottom: 2rem;
  overflow: scroll;
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
