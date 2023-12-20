import styled from "styled-components";
import RegisterInput from "../../components/global/register/RegisterInput";
import Layout from "../../layouts/Layout";
import { flexColumn } from "../../styles/global.style";
import { useState } from "react";
import RegisterTextArea from "../../components/global/register/RegisterTextArea";
import { useForm } from "react-hook-form";
import usePrevPage from "../../hooks/usePrevPage";
import { temp_join_questions } from "../../consts/tempData";
import { join_default_questions } from "../../consts/consts";
import { yupResolver } from "@hookform/resolvers/yup";
import { clubJoinSchema } from "../../utils/validationSchema";

export default function JoinClub() {
  const { onPrevPage } = usePrevPage();
  const [questions, setQuestions] = useState(temp_join_questions);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(clubJoinSchema),
  });

  const handleJoinSubmit = (data) => {
    console.log(data);
  };

  return (
    <Layout
      headerLeft="exit"
      headerCenter="가입하기"
      headerRight="check"
      onClickLeft={onPrevPage}
      onClickRight={handleSubmit(handleJoinSubmit)}
    >
      <JoinClubInputBox>
        {join_default_questions.map((question) => (
          <RegisterInput
            name={question.name}
            register={register}
            label={question.label}
            isRequired={true}
            errorMsg={errors[question.name] && errors[question.name].message}
          />
        ))}
        {questions.map((item) => (
          <RegisterTextArea
            name={item.questionId}
            register={register}
            label={item.question}
            height="5rem"
          />
        ))}
      </JoinClubInputBox>
    </Layout>
  );
}

const JoinClubInputBox = styled.div`
  ${flexColumn}
  gap: 1.5rem;
  padding: 0 1rem;
`;
