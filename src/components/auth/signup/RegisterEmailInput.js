import styled from "styled-components";
import RegisterLabel from "../../global/register/RegisterLabel";
import CustomInput from "../../global/CustomInputs";
import { flexCenter, flexICenter } from "../../../styles/global.style";

import RegisterErrorMsg from "../../global/register/RegisterErrorMsg";
import { useState } from "react";
import AuthEmaillModal from "./AuthEmailModal";

export default function RegisterEmailInput({ id, register, errorMsg, name }) {
  const [isAuthEmaillModal, setIsAuthEmailModal] = useState(false);

  const onClickAuthEmailButton = () => {};

  return (
    <RegisterEmailInputLayout>
      <RegisterLabel id={id} label="이메일을 입력해주세요" isRequired="true" />
      <RegisterEmailBox>
        <CustomInput
          register={register}
          name={name}
          id={id}
          width="100%"
          height="2.5rem"
          radius="0.7rem"
        />
        <SendCodeButton type="button" onClick={() => onClickAuthEmailButton()}>
          인증코드 전송
        </SendCodeButton>
      </RegisterEmailBox>
      {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
      {isAuthEmaillModal && (
        <AuthEmaillModal
          email="wjstjds@naver.com"
          setAuthEmailModal={setIsAuthEmailModal}
        />
      )}
    </RegisterEmailInputLayout>
  );
}

const RegisterEmailInputLayout = styled.div``;

const RegisterEmailBox = styled.div`
  ${flexICenter}
  gap: 1rem;
`;

const SendCodeButton = styled.button`
  ${flexCenter}
  min-width: 6.5rem;
  height: auto;
  background-color: ${(props) => props.theme.colors.dark.sm};
  color: white;
  font-weight: 500;
  font-size: ${(props) => props.theme.sizes.xs};
  border-radius: 3rem;
  padding: 0.7rem 1rem;
  border: none;
  font-family: "Noto Sans KR", sans-serif;
`;
