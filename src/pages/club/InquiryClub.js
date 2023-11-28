import styled from "styled-components";
import RegisterInput from "../../components/global/register/RegisterInput";
import Layout from "../../layouts/Layout";
import { flexColumn } from "../../styles/global.style";
import RegisterButton from "../../components/global/register/RegisterButton";

export default function InquiryClub() {
  return (
    <Layout headerLeft="exit" headerCenter="문의하기" headerRight="check">
      <InquiryClubInputBox>
        <RegisterInput
          label="제목"
          isRequired={true}
          id="name"
          placeholder="제목은 50자 이내로 입력해주세요"
        />
        <RegisterInput
          label="내용"
          isRequired={true}
          id="name"
          inputHeight="20rem"
        />
      </InquiryClubInputBox>
    </Layout>
  );
}

const InquiryClubInputBox = styled.div`
  ${flexColumn}
  gap: 1.5rem;
  padding: 0 1rem;
`;
