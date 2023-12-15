import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import RegisterImage from "../components/global/register/RegisterImage";
import RegisterInput from "../components/global/register/RegisterInput";
import RegisterTag from "../components/global/register/RegisterTag";
import RegisterTextArea from "../components/global/register/RegisterTextArea";
import RegisterClubCategory from "../components/home/clubRegister/RegisterClubCategory";
import usePrevPage from "../hooks/usePrevPage";
import Layout from "../layouts/Layout";
import RegisterSnsInput from "../components/global/register/RegisterSnsInput";
import { useEffect } from "react";
import { temp_club_home_info } from "../consts/tempData";

export default function RegisterClub() {
  const { onPrevPage } = usePrevPage();
  const location = useLocation();
  const params = useParams();
  const clubId = params.clubId;
  const isEdit = location.pathname.includes("/edit");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const clubInfo = temp_club_home_info;

    //Todo. 정보 수정 시 정보 세팅할 때 메인이미지, 배경이미지, 카테고리는 추후 데이터 형태에 따라..
    if (isEdit) {
      setValue("clubName", clubInfo.clubName);
      setValue("clubCategory", clubInfo.clubCategory);
      setValue("clubTags", clubInfo.clubTags);
      setValue("clubDescription", clubInfo.clubIntro);
      clubInfo.clubSns.map((sns) => setValue(sns.snsName + "URL", sns.snsUrl));
    }
  }, []);

  return (
    <Layout
      headerLeft="prev"
      headerCenter={isEdit ? "정보 수정" : "동아리 등록"}
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
          {isEdit && (
            <RegisterImage
              name="clubBackgroundImage"
              register={register}
              watch={watch}
              label="동아리 배경 이미지"
              errorMsg="다시 등록해주세요"
              isBackgroundImage={true}
            />
          )}
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
          <RegisterSnsInput
            label="동아리 SNS 주소"
            register={register}
            error={errors}
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
