import styled from "styled-components";
import { IoClose, IoTrash } from "react-icons/io5";
import {
  flexCenter,
  flexColumn,
  flexICenter,
} from "../../../styles/global.style";
import { useRef } from "react";
import ModalLayout from "../../../layouts/ModalLayout";

export default function ResignModal({ name, setIsResignModal }) {
  return (
    <ModalLayout setModal={setIsResignModal}>
      <ModalBox>
        <ModalHeaderBox>정말 {name}님을 추방하시겠습니까?</ModalHeaderBox>
        <ModalRow>
          <IoClose size={20} />
          닫기
        </ModalRow>
        <ModalRow $isExile={true}>
          <IoTrash size={20} />
          추방
        </ModalRow>
      </ModalBox>
    </ModalLayout>
  );
}

const ModalBox = styled.div`
  ${flexColumn}
  width: 19rem;
  position: fixed;
  left: 50%;
  right: 0;
  transform: translate(-50%, 130%);
  border-radius: 1rem;
  background-color: white;
  z-index: 6;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  & > div:last-child {
    color: red;
    padding-top: 0;
  }
`;

const ModalHeaderBox = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.xs};
  font-size: ${(props) => props.theme.sizes.sm};
  font-weight: ${(props) => props.theme.weights.lg};
`;

const ModalRow = styled.div`
  ${flexICenter}
  gap: 1rem;
  padding: 2rem 2rem;
  font-size: ${(props) => props.theme.sizes.sm};
`;
