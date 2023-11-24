import { useRef } from "react";
import styled from "styled-components";

export default function ModalLayout({ children, setModal }) {
  const modalBackground = useRef();
  const closeModal = (e) => {
    if (e.target === modalBackground.current) {
      setModal(false);
    }
  };

  return (
    <ModalLayoutLayout ref={modalBackground} onClick={(e) => closeModal(e)}>
      {children}
    </ModalLayoutLayout>
  );
}

const ModalLayoutLayout = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;
