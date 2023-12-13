import { AiOutlineMinusCircle } from "react-icons/ai";
import styled from "styled-components";
import { flexICenter } from "../../../styles/global.style";

export default function ManagementQuestion({ question, onClick }) {
  return (
    <ManagementQuestionLayout>
      <AiOutlineMinusCircle size={20} onClick={onClick} />
      <span>{question}</span>
    </ManagementQuestionLayout>
  );
}

const ManagementQuestionLayout = styled.div`
  ${flexICenter};
  width: 100%;
  height: 5.5vh;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: ${(props) => props.theme.colors.gray.xxs};
  gap: 10px;

  & > span {
    color: ${(props) => props.theme.colors.gray.md};
  }
`;
