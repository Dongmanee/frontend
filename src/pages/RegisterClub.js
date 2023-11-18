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
        <RegisterImage />
        <RegisterButton buttonText="등록" />
        {/* <RegisterClubButton>등록</RegisterClubButton> */}
      </RegisterInputList>
    </Layout>
  );
}

const RegisterInputList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RegisterClubButton = styled.div`
  height: 7vh;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.dark.sm};
`;
