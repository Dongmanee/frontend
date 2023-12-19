import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ClubPostsCategory from "../../components/club/posts/ClubPostsCategory";
import RegisterCkEditor from "../../components/global/register/RegisterCkEditor";
import RegisterErrorMsg from "../../components/global/register/RegisterErrorMsg";
import RegisterInput from "../../components/global/register/RegisterInput";
import RegisterLabel from "../../components/global/register/RegisterLabel";
import usePrevPage from "../../hooks/usePrevPage";
import Layout from "../../layouts/Layout";
import { flexColumn } from "../../styles/global.style";
import { useForm } from "react-hook-form";
import RegisterPostCategory from "../../components/global/register/RegisterPostCategory";

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
  } = useForm();

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
        />
        <RegisterInput
          name="postTitle"
          register={register}
          label="제목"
          inputHeight={"3rem"}
        />
        <RegisterCkEditor name="postBody" control={control} label="내용" />
      </PostFormBox>
    </Layout>
  );
}

const TagCol = styled.div`
  box-sizing: border-box;
  padding-top: 20px;

  & > div:first-child {
    margin-bottom: -10px;
  }

  & > span:last-child {
    margin-top: -10px;
  }
`;

const PostFormBox = styled.div`
  ${flexColumn}
  gap: 1.5rem;
`;

export const ContentCol = styled.div`
  padding-top: 20px;
`;
