import styled from "styled-components";
import ModalLayout from "../../../layouts/ModalLayout";
import { flexCenter, flexColumn } from "../../../styles/global.style";
import CustomInput from "../../global/CustomInputs";

export default function AuthEmaillModal({ email, setAuthEmailModal }) {
  return (
    <ModalLayout setModal={setAuthEmailModal}>
      <AuthEmailModalBox>
        <ModalTextBox>
          <div>{email}으로</div>
          <div>인증코드를 전송했습니다</div>
        </ModalTextBox>
        <ModalInputBox>
          <CustomInput placeholder="인증번호 입력" />
          <LeftTimeBox>
            남은시간 :<div>3:00</div>
          </LeftTimeBox>
        </ModalInputBox>
        <ModalButtonRow>
          <ModalButton>코드 재전송</ModalButton>
          <ModalButton>인증번호 확인</ModalButton>
        </ModalButtonRow>
      </AuthEmailModalBox>
    </ModalLayout>
  );
}

const AuthEmailModalBox = styled.div`
  ${flexColumn}
  gap: 1.5rem;
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%, 0);
  border-radius: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  padding: 2.5rem 3rem;
`;

const ModalTextBox = styled.div`
  ${flexColumn}
  align-items: center;
  gap: 0.5rem;
  font-size: ${(props) => props.theme.sizes.sm};
`;

const ModalInputBox = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`;

const LeftTimeBox = styled.div`
  ${flexCenter}
  gap: 0.2rem;
  font-size: ${(props) => props.theme.sizes.xxs};
  & > div {
    color: red;
  }
`;

const ModalButtonRow = styled.div`
  ${flexCenter}
  gap: 0.5rem;
`;

const ModalButton = styled.button`
  min-width: 7rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-family: "Noto Sans KR", sans-serif;
  border: none;
  background-color: ${(props) => props.theme.colors.dark.sm};
  font-size: ${(props) => props.theme.sizes.xs};
  color: white;
`;
