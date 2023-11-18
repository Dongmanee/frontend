import styled from "styled-components";
import RegisterInput from "../components/global/register/RegisterInput";
import Layout from "../layouts/Layout";
import RegisterClubCategory from "../components/home/clubs/RegisterClubCategory";
import RegisterImage from "../components/global/register/RegisterImage";
import RegisterButton from "../components/global/register/RegisterButton";

export default function RegisterClub() {
  return (
    <Layout headerLeft="prev" headerCenter="동아리 등록">
      <RegisterInputList>
        <RegisterInput
          label="이름을 입력해주세요"
          isRequired={true}
          errorMsg="다시 입력해주세요"
        />
        <RegisterClubCategory errorMsg="다시 입력해주세요" />
        <RegisterInput label={"태그를 입력해주세요"} />
        <RegisterInput
          label="소개를 입력해주세요"
          isRequired={true}
          errorMsg="다시 입력해주세요"
          inputHeight="5rem"
        />
        <RegisterImage errorMsg="다시 등록해주세요" />
        <RegisterButton buttonText="등록" />
      </RegisterInputList>
    </Layout>
  );
}

const RegisterInputList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
