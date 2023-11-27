import styled from "styled-components";
import { flexColumn } from "../../../styles/global.style";
import CustomButton from "../../global/CustomButton";
import CustomInput from "../../global/CustomInputs";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onLogin = (e) => {
    e.preventDefault();
    const body = {
      email: "0603118@naver.com",
      password: "@test1234",
    };
    axios.post(`http://43.202.170.12:8080/login`, body).then((res) => console.log(res));
  };

  const onSubmit = (data) => console.log(data);

  return (
    <LoginFormBox onSubmit={onLogin}>
      <CustomInput
        name="email"
        height="5vh"
        radius="1rem"
        padding="0.3rem 1.2rem"
        placeholder="이메일을 입력하세요"
      />

      <CustomInput
        name="password"
        height="5vh"
        radius="1rem"
        padding="0.3rem 1.2rem"
        placeholder="비밀번호를 입력하세요"
      />
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
