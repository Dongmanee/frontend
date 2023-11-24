import styled from "styled-components";
import ModalLayout from "../../../layouts/ModalLayout";
import { flexColumn } from "../../../styles/global.style";

export default function AuthEmaillModal({ email, setAuthEmailModal }) {
  return (
    <ModalLayout setModal={setAuthEmailModal}>
      <AuthEmailModalBox>{email}</AuthEmailModalBox>
    </ModalLayout>
  );
}

const AuthEmailModalBox = styled.div`
  ${flexColumn}
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, 0);
  background-color: white;
`;
