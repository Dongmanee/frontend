import { AiOutlineMinusCircle } from "react-icons/ai";
import styled from "styled-components";
import { flexICenter } from "../../../styles/global.style";
import { useEffect, useState } from "react";

export default function ManagementQuestion({
  question,
  onClick,
  setQuestions,
  lastInputRef,
}) {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  //Todo. 질문 수정 후 변경된 질문을 기존 데이터에 어떻게 반영할 것인지 고안해야함!
  const onBlur = () => {
    // setQuestions((prev) => prev.filter());
  };

  useEffect(() => {
    setInputValue(question);
  }, [question]);

  return (
    <ManagementQuestionLayout>
      <AiOutlineMinusCircle size={20} onClick={onClick} />
      <input
        ref={lastInputRef}
        value={inputValue}
        onChange={onChange}
        onBlur={onBlur}
      ></input>
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

  & > input {
    color: ${(props) => props.theme.colors.gray.md};
    width: 100%;
    border: none;
    background-color: ${(props) => props.theme.colors.gray.xxs};
  }
`;
