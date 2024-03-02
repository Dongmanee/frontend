import styled from "styled-components";
import { flexColumn } from "../../assets/styles/global.style";
import { temp_inquiries } from "../../consts/tempData";
import InquiryCard from "../../components/clubSetting/inquiries/InquiryCard";

export default function ClubSettingInquiries() {
  return (
    <ClubSettingInquiriesLayout>
      {temp_inquiries.map((inquiry, idx) => (
        <InquiryCard key={idx} inquiryInfo={inquiry} />
      ))}
    </ClubSettingInquiriesLayout>
  );
}

const ClubSettingInquiriesLayout = styled.div`
  ${flexColumn}
  gap: 1.5rem
`;
