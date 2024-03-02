import { useLocation } from "react-router-dom";
import styled from "styled-components";
import RegisterCkEditor from "../../components/global/register/RegisterCkEditor";
import RegisterInput from "../../components/global/register/RegisterInput";
import usePrevPage from "../../hooks/usePrevPage";
import { flexColumn } from "../../assets/styles/global.style";
import { useForm } from "react-hook-form";
import RegisterPostCategory from "../../components/global/register/RegisterPostCategory";
import { yupResolver } from "@hookform/resolvers/yup";
import { clubPostSchema } from "../../utils/validationSchema";
import Layout from "../../components/layouts/Layout";
export default function ClubPostsEdit() {
  const location = useLocation();
  const url = location.pathname.split("posts/")[1];
  const isAdd = url == "add";
  const { onPrevPage } = usePrevPage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(clubPostSchema),
  });

  const handleClubPostWrite = (data) => {
    console.log(data);
  };

  return (
    <Layout
      headerLeft={"exit"}
      headerCenter={isAdd ? "글쓰기" : "수정"}
      headerRight={"check"}
      onClickLeft={onPrevPage}
      onClickRight={handleSubmit(handleClubPostWrite)}
    >
      <PostFormBox>
        <RegisterPostCategory
          name="postCategory"
          control={control}
          label="카테고리"
          errorMsg={errors.postCategory && errors.postCategory.message}
        />
        <RegisterInput
          name="postTitle"
          register={register}
          label="제목"
          inputHeight={"3rem"}
          errorMsg={errors.postTitle && errors.postTitle.message}
        />
        <RegisterCkEditor
          name="postBody"
          control={control}
          label="내용"
          errorMsg={errors.postBody && errors.postBody.message}
        />
      </PostFormBox>
    </Layout>
  );
}

const PostFormBox = styled.div`
  ${flexColumn}
  gap: 1.5rem;
`;

export const ContentCol = styled.div`
  padding-top: 20px;
`;
