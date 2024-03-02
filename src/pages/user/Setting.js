import styled from "styled-components";
import Navbar from "../../components/global/Navbar";
import { temp_setting_lists } from "../../consts/tempData";
import usePrevPage from "../../hooks/usePrevPage";
import kakao from "../../assets/images/kakao.png";
import { flexCenter, flexColumn, flexICenter } from "../../assets/styles/global.style";
import Layout from "../../components/layouts/Layout";
import { FcButtingIn } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function Setting() {
  const { onPrevPage } = usePrevPage();
  const navigate = useNavigate();

  const handleOtherSchoolBtn = () => {
    navigate("/univs");
  };

  return (
    <Layout headerLeft="prev" onClickLeft={onPrevPage}>
      <SettingLayout>
        <SettingBoxItemCol>
          <SettingBoxItem onClick={handleOtherSchoolBtn}>
            <FcButtingIn size={25} />
            다른 학교 탐방하기
          </SettingBoxItem>
        </SettingBoxItemCol>

        <SettingCol>
          <span>로그인 설정</span>
          <SettingBoxItemCol>
            <SettingBoxItem>
              <img width={25} height={25} src={kakao} alt="" />
              카카오 계정 연결하기
            </SettingBoxItem>
            <SettingBoxItem>로그아웃</SettingBoxItem>
          </SettingBoxItemCol>
        </SettingCol>

        <SettingCol>
          <span>서비스 정보</span>
          <SettingBoxItemCol>
            {temp_setting_lists.map((item, idx) => (
              <SettingBoxItem key={idx}>
                {item.icon}
                {item.name}
              </SettingBoxItem>
            ))}
          </SettingBoxItemCol>
        </SettingCol>

        <Withdraw>계정탈퇴</Withdraw>
      </SettingLayout>
      <Navbar />
    </Layout>
  );
}

const SettingLayout = styled.div`
  ${flexColumn};
  height: 80vh;
  gap: 50px;
  position: relative;
  padding-bottom: ${(props) => props.theme.global.height};
`;

const SettingCol = styled.div`
  ${flexColumn};

  span {
    font-weight: ${(props) => props.theme.weights.xl};
  }
`;

const SettingBoxItemCol = styled.div`
  ${flexColumn};
  gap: 50px;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 20px;
`;

const SettingBoxItem = styled.div`
  ${flexICenter};
  cursor: pointer;
  gap: 30px;

  font-size: ${(props) => props.theme.sizes.md};
  font-weight: ${(props) => props.theme.weights.md};
`;

const Withdraw = styled.div`
  ${flexCenter};

  text-decoration: underline;
  font-size: ${(props) => props.theme.sizes.sm};
  font-weight: ${(props) => props.theme.weights.xl};
  color: ${(props) => props.theme.colors.red.md};
`;
