import styled from "styled-components";
import Navbar from "../../components/global/Navbar";
import { temp_setting_lists } from "../../consts/tempData";
import usePrevPage from "../../hooks/usePrevPage";
import kakao from "../../images/kakao.png";
import Layout from "../../layouts/Layout";
import { flexCenter, flexColumn, flexICenter } from "../../styles/global.style";

export default function Setting() {
  const { onPrevPage } = usePrevPage();
  return (
    <Layout headerLeft="prev" onClickLeft={onPrevPage}>
      <SettingLayout>
        <SettingCol>
          <span>로그인 설정</span>
          <SettingBoxItemCol>
            <SettingBoxItem>
              <img width={25} height={25} src={kakao} alt="" />
              카카오 계정 연결하기
            </SettingBoxItem>
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
  margin-top: 30px;
  gap: 50px;
  position: relative;
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
  position: absolute;
  bottom: 20px;
  right: 0;
  left: 0;

  text-decoration: underline;
  font-size: ${(props) => props.theme.sizes.sm};
  font-weight: ${(props) => props.theme.weights.xl};
  color: ${(props) => props.theme.colors.red.md};
`;
