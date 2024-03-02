import  { Fragment } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../../apis/login";
import { flexColumn } from "../../../assets/styles/global.style";
import { loginSchema } from "../../../utils/validationSchema";
import CustomButton from "../../global/CustomButton";
import CustomInput from "../../global/CustomInputs";
import RegisterErrorMsg from "../../global/register/RegisterErrorMsg";
import { setCookie } from "../../../utils/cookies";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";



const cookie_save_time = 60; // test = 1분

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onLogin = ({ email, password }) => {
    login({ email, password }).then((res) => {
      if (res.status === 200) {
        setCookie("accessToken", res.data.data.accessToken, {
          path: "/",
          httponly: true,
          expires: new Date(Date.now() + cookie_save_time * 1000),
        });
        setTimeout(() => {
          alert("쿠키 만료됨 -> 다시 로그인 해주셈");
          window.location.reload();
        }, cookie_save_time * 1000 + 3000);
        // navigate("/posts");
      } else {
        console.log("로그인 에러");
      }
    });
  };

  const login_inputs = [
    {
      name: "email",
      placeholder: "이메일을 입력하세요",
    },
    {
      name: "password",
      placeholder: "비밀번호를 입력하세요",
      type: "password",
    },
  ];

  return (
    <LoginFormBox onSubmit={handleSubmit(onLogin)}>
      {login_inputs.map((input, idx) => (
        <Fragment key={idx}>
          <CustomInput
            name={input.name}
            placeholder={input.placeholder}
            type={input.type}
            register={register}
            height="5vh"
            radius="1rem"
            padding="0.3rem 1.2rem"
          />
          {errors[input.name] && (
            <RegisterErrorMsg
              errorMsg={errors[input.name].message}
              margin="-0.625rem 0"
            />
          )}
        </Fragment>
      ))}

      <CustomButton
        isDisabled={isSubmitting}
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

const LoginFormBox = styled.form`
  ${flexColumn}
  gap: 1.5rem;
`;
