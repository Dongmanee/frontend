import styled from "styled-components";
import ManagementQuestion from "../../components/clubSetting/applications/ManagementQuestion";
import RegisterLabel from "../../components/global/register/RegisterLabel";
import usePrevPage from "../../hooks/usePrevPage";
import Layout from "../../layouts/Layout";
import { flexCenter, flexColumn, fullSize } from "../../styles/global.style";
import { temp_club_application_management } from "../../consts/tempData";
import { useEffect, useRef, useState } from "react";

// 추후에 가능하다면 드래깅도 가능하게 수정해보자!
export default function ClubSettingApplicationManagement() {
  const { onPrevPage } = usePrevPage();
  const [questions, setQuestions] = useState(temp_club_application_management);
  const lastInputRef = useRef(null);
  const focus = useRef(false);

  const deleteQuestion = (removeIdx) => {
    setQuestions(questions.filter((question, idx) => idx != removeIdx));
  };

  const addQuestion = () => {
    focus.current = true;
    setQuestions((prev) => [...prev, { question: "" }]);
  };

  useEffect(() => {
    if (!lastInputRef.current || !focus.current) return;
    lastInputRef.current.focus();
    focus.current = false;
  }, [questions.length, focus]);

  return (
    <Layout
      headerLeft="prev"
      headerCenter="지원서 관리"
      headerRight="check"
      onClickLeft={onPrevPage}
    >
      <ClubSettingApplicationManagementCol>
        <RegisterLabel label="추가로 받을 내용을 입력해주세요" />
        {questions &&
          questions.map((item, idx) => (
            <ManagementQuestion
              key={idx}
              question={item.question}
              onClick={() => deleteQuestion(idx)}
              setQuestions={setQuestions}
              inputRef={lastInputRef}
            />
          ))}
      </ClubSettingApplicationManagementCol>

      <AddQuestionButton onClick={addQuestion}>질문 추가하기</AddQuestionButton>
    </Layout>
  );
}

const ClubSettingApplicationManagementCol = styled.div`
  ${fullSize};
  ${flexColumn};
  margin-top: 30px;
  gap: 20px;
`;

const AddQuestionButton = styled.div`
  width: 90%;
  height: 7vh;
  ${flexCenter};
  position: fixed;
  bottom: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.dark.md};
  cursor: pointer;

  color: white;
  font-size: ${(props) => props.theme.sizes.xl};
  font-weight: ${(props) => props.theme.weights.md};
`;
