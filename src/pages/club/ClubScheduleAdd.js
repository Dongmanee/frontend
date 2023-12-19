import styled from "styled-components";
import RegisterInput from "../../components/global/register/RegisterInput";
import { temp_club_schedule_add } from "../../consts/tempData";
import usePrevPage from "../../hooks/usePrevPage";
import Layout from "../../layouts/Layout";
import { ContentCol } from "./ClubPostsEdit";
import RegisterTextArea from "../../components/global/register/RegisterTextArea";
import { useForm } from "react-hook-form";
import { flexColumn } from "../../styles/global.style";

export default function ClubScheduleAdd() {
  const { onPrevPage } = usePrevPage();
  const { register } = useForm();

  return (
    <Layout
      headerLeft={"exit"}
      headerCenter={"일정추가"}
      headerRight={"check"}
      onClickLeft={onPrevPage}
    >
      <ScheduleFormBox>
        <RegisterRowBox>
          <RegisterInput name="schedule" label="일정 날짜" type="date" />
          <RegisterInput label="일정 시간" type="time" />
        </RegisterRowBox>

        {temp_club_schedule_add.map((item, idx) => (
          <RegisterInput
            name={item.name}
            register={register}
            inputHeight={"3rem"}
            label={item.label}
          />
        ))}

        <RegisterTextArea
          name="scheduleDetail"
          register={register}
          label="일정 내용"
        />
      </ScheduleFormBox>
    </Layout>
  );
}

const RegisterRowBox = styled.div`
  display: grid;
  grid-template-columns: 45% 50%;
  gap: 5%;
`;

const ScheduleFormBox = styled.div`
  ${flexColumn}
  gap: 1rem;
  margin-top: 1rem;
`;
