import styled from "styled-components";
import RegisterInput from "../../components/global/register/RegisterInput";
import { flexColumn } from "../../assets/styles/global.style";
import { useForm } from "react-hook-form";
import RegisterTextArea from "../../components/global/register/RegisterTextArea";
import usePrevPage from "../../hooks/usePrevPage";
import { clubInquirySchema } from "../../utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Layout from "../../components/layouts/Layout";

export default function InquiryClub() {
  const { onPrevPage } = usePrevPage();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(clubInquirySchema),
  });

  const handleInquirySubmit = (data) => {
    console.log(data);
  };

  return (
    <Layout
      headerLeft="exit"
      headerCenter="문의하기"
      headerRight="check"
      onClickLeft={onPrevPage}
      onClickRight={handleSubmit(handleInquirySubmit)}
    >
      <InquiryClubInputBox>
        <RegisterInput
          name="clubInquiryName"
          register={register}
          label="제목"
          isRequired={true}
          errorMsg={errors.clubInquiryName && errors.clubInquiryName.message}
        />
        <RegisterTextArea
          name="clubInquiryBody"
          register={register}
          label="문의내용"
          isRequired={true}
          height="40rem"
          errorMsg={errors.clubInquiryBody && errors.clubInquiryBody.message}
        />
      </InquiryClubInputBox>
    </Layout>
  );
}

const InquiryClubInputBox = styled.div`
  ${flexColumn}
  gap: 1.5rem;
  padding: 1rem 1rem 0 1rem;
`;
