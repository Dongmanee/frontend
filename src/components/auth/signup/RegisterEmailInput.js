import styled from "styled-components";
import RegisterLabel from "../../global/register/RegisterLabel";
import CustomInput from "../../global/CustomInputs";
import { flexICenter } from "../../../styles/global.style";
import CustomButton from "../../global/CustomButton";
import RegisterErrorMsg from "../../global/register/RegisterErrorMsg";
import { useState } from "react";
import AuthEmaillModal from "./AuthEmailModal";

export default function RegisterEmailInput({ id, label, errorMsg }) {
  const [isAuthEmaillModal, setIsAuthEmailModal] = useState(false);

  const onClickAuthEmailButton = () => {
    setIsAuthEmailModal(true);
  };

  return (
    <RegisterEmailInputLayout>
      <RegisterLabel id={id} label="이메일을 입력해주세요" isRequired="true" />
      <RegisterEmailBox>
        <CustomInput id={id} width="100%" height="2.5rem" radius="0.7rem" />
        <CustomButton
          onClick={onClickAuthEmailButton}
          height="2.5rem"
          width="8rem"
          bgColor={(props) => props.theme.colors.dark.sm}
          color="white"
          bold="500"
          size={(props) => props.theme.sizes.xs}
          radius="3rem"
          padding={"1rem"}
        >
          인증번호 전송
        </CustomButton>
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
