import styled from "styled-components";
import ClubPostsCategory from "../../components/club/posts/ClubPostsCategory";
import PenIcon from "../../components/global/PenIcon";
import RegisterErrorMsg from "../../components/global/register/RegisterErrorMsg";
import RegisterImage from "../../components/global/register/RegisterImage";
import RegisterInput from "../../components/global/register/RegisterInput";
import RegisterLabel from "../../components/global/register/RegisterLabel";
import Layout from "../../layouts/Layout";
import { useLocation } from "react-router-dom";
import usePrevPage from "../../hooks/usePrevPage";

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
      <TagCol>
        <RegisterLabel label={"해당되는 태그를 선택해주세요"} />
        <ClubPostsCategory margin={"0"} />
        <RegisterErrorMsg errorMsg={"태그는 임원만 선택할 수 있습니다"} />
      </TagCol>

      <ContentCol>
        <RegisterInput inputHeight={"3rem"} label={"제목을 입력해주세요"} />
      </ContentCol>

      <TextCol>
        <RegisterInput inputHeight={"15rem"} label={"내용을 입력해주세요"} />
      </TextCol>

      <ContentCol>
        <RegisterImage errorMsg={"이미지를 등록해주세요"} />
      </ContentCol>

      <PenIcon />
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

export const ContentCol = styled.div`
  padding-top: 20px;
`;

const TextCol = styled(ContentCol)`
  height: 30vh;
`;
