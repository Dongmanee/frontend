import styled from "styled-components";
import RegisterLabel from "../../global/register/RegisterLabel";
import CustomInput from "../../global/CustomInputs";
import { flexCenter, flexICenter } from "../../../styles/global.style";
import RegisterErrorMsg from "../../global/register/RegisterErrorMsg";
import { useState } from "react";
import AuthEmaillModal from "./AuthEmailModal";
import { emailSchema } from "../../../utils/validationSchema";

export default function RegisterEmailInput({
  id,
  register,
  errorMsg,
  name,
  getValues,
  authenticatedCode,
  setAuthenticatedCode,
  setError,
  value,
}) {
  const [isAuthEmaillModal, setIsAuthEmailModal] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");

  const onClickAuthEmailButton = () => {
    emailSchema
      .validate(getValues(name))
      .then(() => {
        setIsAuthEmailModal(true);
        setEnteredEmail(getValues(name));
      })
      .catch((error) =>
        setError("email", { message: error.message }, { shouldFocus: true })
      );
  };

  return (
    <RegisterEmailInputLayout>
      <RegisterLabel id={id} label="이메일" isRequired="true" />
      <RegisterEmailBox>
        <CustomInput
          value={value}
          register={register}
          name={name}
          id={id}
          width="100%"
          height="2.5rem"
          radius="0.7rem"
          placeholder="이메일을 입력해주세요"
          readOnly={authenticatedCode != "" ? true : false}
        />
        <SendCodeButton
          type="button"
          disabled={authenticatedCode != "" ? true : false}
          onClick={onClickAuthEmailButton}
        >
          {authenticatedCode != "" ? "인증완료" : "인증번호전송"}
        </SendCodeButton>
      </RegisterEmailBox>
      {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
      {isAuthEmaillModal && (
        <AuthEmaillModal
          email={enteredEmail}
          setAuthEmailModal={setIsAuthEmailModal}
          setAuthenticatedCode={setAuthenticatedCode}
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
  border: none;
  border-radius: 3rem;
  padding: 0.7rem 1rem;
  background-color: ${(props) => props.theme.colors.dark.sm};

  font-family: "Noto Sans KR", sans-serif;
  color: white;
  font-weight: 500;
  font-size: ${(props) => props.theme.sizes.xs};
`;
