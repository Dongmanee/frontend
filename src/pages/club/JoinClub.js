import styled from "styled-components";
import RegisterInput from "../../components/global/register/RegisterInput";
import Layout from "../../layouts/Layout";
import { flexColumn } from "../../styles/global.style";

export default function JoinClub() {
  return (
    <Layout headerLeft="exit" headerCenter="가입하기" headerRight="check">
      <JoinClubInputBox>
        <RegisterInput label="이름" isRequired={true} id="name" />
        <RegisterInput label="학과" isRequired={true} id="name" />
        <RegisterInput label="학번" isRequired={true} id="name" />
        <RegisterInput label="핸드폰 번호" isRequired={true} id="name" />
        <RegisterInput
          label="동아리 질문 1."
          isRequired={true}
          id="name"
          inputHeight="7rem"
        />
        <RegisterInput
          label="동아리 질문 2."
          isRequired={true}
          id="name"
          inputHeight="7rem"
        />
      </JoinClubInputBox>
    </Layout>
  );
}

const JoinClubInputBox = styled.div`
  ${flexColumn}
  gap: 1.5rem;
  padding: 0 1rem;
`;
