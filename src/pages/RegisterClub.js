import styled from "styled-components";
import RegisterInput from "../components/global/register/RegisterInput";
import Layout from "../layouts/Layout";
import RegisterClubCategory from "../components/home/clubs/RegisterClubCategory";

export default function RegisterClub() {
  return (
    <Layout headerLeft="prev" headerCenter="동아리 등록">
      <RegisterInputList>
        <RegisterInput
          label="이름을 입력해주세요"
          isRequired={true}
          errorMsg="다시입력해주세요"
        />
        <RegisterClubCategory />
        <RegisterInput label={"태그를 입력해주세요"} />
        <RegisterInput
          label="소개를 입력해주세요"
          isRequired={true}
          errorMsg="다시입력해주세요"
          inputHeight="5rem"
        />
      </RegisterInputList>
    </Layout>
  );
}

const RegisterInputList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
