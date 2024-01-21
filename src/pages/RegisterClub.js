import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import RegisterClubCategory from "../components/global/register/RegisterClubCategory";
import RegisterImage from "../components/global/register/RegisterImage";
import RegisterInput from "../components/global/register/RegisterInput";
import RegisterSnsInput from "../components/global/register/RegisterSnsInput";
import RegisterTag from "../components/global/register/RegisterTag";
import RegisterTextArea from "../components/global/register/RegisterTextArea";
import { temp_club_home_info } from "../consts/tempData";
import usePrevPage from "../hooks/usePrevPage";
import Layout from "../layouts/Layout";
import { registerClubSchema } from "../utils/validationSchema";
import { getPosts, registerClub } from "../apis/club";

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
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerClubSchema),
  });

  const onSubmit = (data) => {

    // const formData = new FormData();

    // formData.append('categoryId', 0);
    // formData.append('name', data.clubName);
    // formData.append('description', data.clubDescription);
    // formData.append('clubMainImageUrl', data.clubMainImage[0]);
    // formData.append('address', data.clubAddress);
    

    // const test = {
    //   categoryId:0,
    //   name:data.clubName,
    //   description:data.clubDescription,
    // }


    // registerClub({data:test}).then(res =>console.log(res))
    // .catch(err => console.log(err))

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
  }, [isEdit]);

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
          />
          <RegisterClubCategory
            name="clubCategory"
            control={control}
            errorMsg={errors.clubCategory?.message}
          />
          <RegisterInput
            name="clubName"
            register={register}
            label="동아리 이름"
            isRequired={true}
            errorMsg={errors.clubName?.message}
          />
          <RegisterInput
            name="clubAddress"
            register={register}
            label="동아리 주소"
            isRequired={true}
            errorMsg={errors.clubAddress?.message}
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
          <RegisterTextArea
            name="clubDescription"
            register={register}
            label="동아리 소개"
            isRequired={true}
            errorMsg={errors.clubDescription?.message}
            height="5rem"
          />
          <RegisterTag
            name="clubTags"
            control={control}
            label="동아리 태그 ( 최대 3개까지 입력 가능 )"
          />
          <RegisterSnsInput label="동아리 SNS 주소" register={register} error={errors} />
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
