import styled from "styled-components";
import Layout from "../../layouts/Layout";
import { useParams } from "react-router-dom";
import ConfirmStateBox from "../../components/clubSetting/inquiries/ConfirmStateBox";
import { flexColumn } from "../../styles/global.style";
import InquiryDetailItem from "../../components/clubSetting/inquiries/InquiryDetailItem";
import RegisterInput from "../../components/global/register/RegisterInput";
import usePrevPage from "../../hooks/usePrevPage";
import RegisterTextArea from "../../components/global/register/RegisterTextArea";
import { useForm } from "react-hook-form";

export default function ClubSettingInquiryDetail() {
  const { inquiryId } = useParams();
  const { onPrevPage } = usePrevPage();
  const { register } = useForm();

  return (
    <Layout
      headerLeft="prev"
      headerCenter="문의내역"
      headerRight="check"
      onClickLeft={onPrevPage}
    >
      <ClubSettingInquiryDetailLayout>
        <ConfirmStateBox isConfirm={true} />
        <InquiryFormBox>
          <InquiryDetailItem label="제목" contents="제목입니당" />
          <InquiryDetailItem label="등록일" contents="2023.11.22" />
          <InquiryDetailItem label="문의내용" contents="문의내용입니당" />
          <RegisterTextArea
            name="clubInquiryAnswer"
            label="답변"
            height="32rem"
            register={register}
          />
        </InquiryFormBox>
      </ClubSettingInquiryDetailLayout>
    </Layout>
  );
}

const ClubSettingInquiryDetailLayout = styled.div`
  width: 100%;
  ${flexColumn}
  align-items: center;
  gap: 1.5rem;
`;

const InquiryFormBox = styled.div`
  ${flexColumn}
  width: 100%;
  gap: 1.5rem;
`;
