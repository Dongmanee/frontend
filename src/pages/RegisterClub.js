import styled from "styled-components";
import RegisterInput from "../components/global/register/RegisterInput";
import Layout from "../layouts/Layout";
import RegisterClubCategory from "../components/home/clubRegister/RegisterClubCategory";
import RegisterImage from "../components/global/register/RegisterImage";
import RegisterButton from "../components/global/register/RegisterButton";
import RegisterTag from "../components/global/register/RegisterTag";
import usePrevPage from "../hooks/usePrevPage";

export default function RegisterClub() {
  const { onPrevPage } = usePrevPage();

  return (
    <Layout
      headerLeft="prev"
      headerCenter="동아리 등록"
      headerRight="check"
      onClickLeft={onPrevPage}
    >
      <RegisterInputList>
        <RegisterInput
          label="동아리 이름"
          isRequired={true}
          errorMsg="다시 입력해주세요"
        />
        <RegisterClubCategory errorMsg="다시 선택해주세요" />
        <RegisterTag label="동아리 태그 ( 최대 3개까지 입력 가능 )" />
        <RegisterInput
          label="동아리 소개"
          isRequired={true}
          errorMsg="다시 입력해주세요"
          inputHeight="5rem"
        />
        <RegisterInput
          label="동아리 인스타그램 주소"
          isRequired={true}
          errorMsg="다시 입력해주세요"
        />
        <RegisterImage
          label="동아리 대표 이미지"
          errorMsg="다시 등록해주세요"
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
