import styled from "styled-components";
import RegisterInput from "../../components/global/register/RegisterInput";
import { temp_club_schedule_add } from "../../consts/tempData";
import usePrevPage from "../../hooks/usePrevPage";
import RegisterTextArea from "../../components/global/register/RegisterTextArea";
import { useForm } from "react-hook-form";
import { flexColumn } from "../../assets/styles/global.style";
import { yupResolver } from "@hookform/resolvers/yup";
import { clubScheduleSchema } from "../../utils/validationSchema";
import Layout from "../../components/layouts/Layout";
export default function ClubScheduleAdd() {
  const { onPrevPage } = usePrevPage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(clubScheduleSchema),
  });

  const handleScheduleAdd = (data) => {
    console.log(data);
  };

  return (
    <Layout
      headerLeft={"exit"}
      headerCenter={"일정추가"}
      headerRight={"check"}
      onClickLeft={onPrevPage}
      onClickRight={handleSubmit(handleScheduleAdd)}
    >
      <ScheduleFormBox>
        <RegisterRowBox>
          <RegisterInput
            name="scheduleDate"
            register={register}
            label="일정 날짜"
            type="date"
            inputHeight={"3rem"}
            errorMsg={errors.scheduleDate && errors.scheduleDate.message}
          />
          <RegisterInput
            name="scheduleTime"
            register={register}
            label="일정 시간"
            type="time"
            inputHeight={"3rem"}
            errorMsg={errors.scheduleTime && errors.scheduleTime.message}
          />
        </RegisterRowBox>

        {temp_club_schedule_add.map((item, idx) => (
          <RegisterInput
            name={item.name}
            register={register}
            inputHeight={"3rem"}
            label={item.label}
            errorMsg={errors[item.name] && errors[item.name].message}
          />
        ))}

        <RegisterTextArea
          name="scheduleDetail"
          register={register}
          label="일정 내용"
          errorMsg={errors.scheduleDetail && errors.scheduleDetail.message}
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
  margin-top: 1.5rem;
`;
