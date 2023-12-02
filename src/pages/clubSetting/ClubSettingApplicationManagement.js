import styled from "styled-components";
import ManagementQuestion from "../../components/clubSetting/applications/ManagementQuestion";
import RegisterLabel from "../../components/global/register/RegisterLabel";
import usePrevPage from "../../hooks/usePrevPage";
import Layout from "../../layouts/Layout";
import { flexCenter, flexColumn, fullSize } from "../../styles/global.style";

// 추후에 가능하다면 드래깅도 가능하게 수정해보자!
export default function ClubSettingApplicationManagement() {
  const { onPrevPage } = usePrevPage();
  return (
    <Layout
      headerLeft="prev"
      headerCenter="지원서 관리"
      headerRight="check"
      onClickLeft={onPrevPage}
    >
      <ClubSettingApplicationManagementCol>
        <RegisterLabel label="추가로 받을 내용을 입력해주세요" />
        <ManagementQuestion question={"질문1"} />
        <ManagementQuestion question={"질문2"} />
        <ManagementQuestion question={"질문3"} />
      </ClubSettingApplicationManagementCol>

      <AddQuestionButton>질문 추가하기</AddQuestionButton>
    </Layout>
  );
}

const ClubSettingApplicationManagementCol = styled.div`
  ${fullSize};
  ${flexColumn};
  margin-top: 30px;
  gap: 20px;
`;

const AddQuestionButton = styled.div`
  width: 90%;
  height: 7vh;
  ${flexCenter};
  position: fixed;
  bottom: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.dark.md};
  cursor: pointer;

  color: white;
  font-size: ${(props) => props.theme.sizes.xl};
  font-weight: ${(props) => props.theme.weights.md};
`;