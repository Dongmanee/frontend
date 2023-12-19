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

export default function ClubPostsEdit() {
  const location = useLocation();
  const url = location.pathname.split("posts/")[1];
  const isAdd = url == "add";
  const { onPrevPage } = usePrevPage();
  return (
    <Layout
      headerLeft={"exit"}
      headerCenter={isAdd ? "글쓰기" : "수정"}
      headerRight={"check"}
      onClickLeft={onPrevPage}
    >
      <PostFormBox>
        <TagCol>
          <RegisterLabel label="카테고리" />
          <ClubPostsCategory margin={"0"} />
          <RegisterErrorMsg errorMsg={"태그는 임원만 선택할 수 있습니다"} />
        </TagCol>
        <RegisterInput label="제목" inputHeight={"3rem"} />
        <RegisterCkEditor label="내용" />
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
