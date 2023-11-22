import styled from "styled-components";
import { flexCenter } from "../../../styles/global.style";
import { useState } from "react";
import ResignModal from "./ResignModal";

export default function ResignButton({ name }) {
  const [isResignModal, setIsResignModal] = useState(false);

  const clickResignButton = () => {
    setIsResignModal(true);
  };

  return (
    <ResignButtonLayout>
      <ResignButtonBox onClick={clickResignButton}>추방</ResignButtonBox>
      {isResignModal && (
        <ResignModal name={name} setIsResignModal={setIsResignModal} />
      )}
    </ResignButtonLayout>
  );
}

const ResignButtonLayout = styled.div``;

const ResignButtonBox = styled.div`
  ${flexCenter}
  min-width: 2rem;
  border-radius: 1rem;
  padding: 0.5rem;
  /* background-color: ${(props) => props.theme.colors.gray.xxs}; */
  font-size: ${(props) => props.theme.sizes.xxs};
  font-weight: ${(props) => props.theme.weights.lg};
  color: red;
`;
