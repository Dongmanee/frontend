import styled from "styled-components";
import RegisterInput from "../components/global/register/RegisterInput";
import Layout from "../layouts/Layout";
import RegisterClubCategory from "../components/home/clubRegister/RegisterClubCategory";
import RegisterImage from "../components/global/register/RegisterImage";
import RegisterButton from "../components/global/register/RegisterButton";
import RegisterTag from "../components/global/register/RegisterTag";
import usePrevPage from "../hooks/usePrevPage";
import RegisterTextArea from "../components/global/register/RegisterTextArea";
import { useForm } from "react-hook-form";

export default function RegisterClub() {
  const { onPrevPage } = usePrevPage();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Layout
      headerLeft="prev"
      headerCenter="동아리 등록"
      headerRight="check"
      onClickLeft={onPrevPage}
      onClickRight={handleSubmit(onSubmit)}
    >
      <form>
        <RegisterInputList>
          <RegisterImage
            name="clubMainImage"
            register={register}
            watch={watch}
            label="동아리 대표 이미지"
            errorMsg="다시 등록해주세요"
          />
          <RegisterInput
            name="clubName"
            register={register}
            label="동아리 이름"
            isRequired={true}
            errorMsg="다시 입력해주세요"
          />
          <RegisterClubCategory
            name="clubCategory"
            control={control}
            errorMsg="다시 선택해주세요"
          />
          <RegisterTag
            name="clubTags"
            control={control}
            label="동아리 태그 ( 최대 3개까지 입력 가능 )"
          />
          <RegisterTextArea
            name="clubDescription"
            register={register}
            label="동아리 소개"
            isRequired={true}
            errorMsg="다시 입력해주세요"
            height="5rem"
          />
          <RegisterInput
            name="clubInstagramURL"
            register={register}
            label="동아리 인스타그램 주소"
            isRequired={true}
            errorMsg="다시 입력해주세요"
          />
        </RegisterInputList>
      </form>
    </Layout>
  );
}

const RegisterInputList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
