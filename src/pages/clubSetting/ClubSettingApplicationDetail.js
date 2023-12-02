import styled from "styled-components";
import RegisterLabel from "../../components/global/register/RegisterLabel";
import { temp_club_setting_application_details } from "../../consts/tempData";
import Layout from "../../layouts/Layout";
import { flexCenter, flexColumn } from "../../styles/global.style";
import usePrevPage from "../../hooks/usePrevPage";

export default function ClubSettingApplicationDetail() {
  const { onPrevPage } = usePrevPage();

  return (
    <Layout headerLeft="prev" headerCenter="신청내역" onClickLeft={onPrevPage}>
      <ClubSettingApplicationDetailCol>
        {temp_club_setting_application_details.map((item, idx) => (
          <InfoBox key={idx}>
            <RegisterLabel label={item.label} />
            <span>{item.data}</span>
          </InfoBox>
        ))}
      </ClubSettingApplicationDetailCol>

      <ClubSettingApplicationDetailConfirmButton>
        <span>가입 거부</span>
        <span>가입 승인</span>
      </ClubSettingApplicationDetailConfirmButton>
    </Layout>
  );
}

const ClubSettingApplicationDetailCol = styled.div`
  ${flexColumn};
  margin-top: 30px;
  gap: 30px;
`;

const InfoBox = styled.div`
  ${flexColumn};

  span {
    font-weight: ${(props) => props.theme.weights.sm};
  }
`;

const ClubSettingApplicationDetailConfirmButton = styled.div`
  ${flexCenter};
  width: 90vw;
  height: 7vh;
  position: fixed;
  bottom: 20px;
  border-radius: 15px;
  box-shadow: 1px 1px 10px black;
  cursor: pointer;

  span {
    ${flexCenter};
  }

  span:first-child {
    width: 50%;
    height: 100%;
    background-color: white;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;

    font-size: ${(props) => props.theme.sizes.md};
    color: ${(props) => props.theme.colors.gray.md};
  }

  span:last-child {
    width: 50%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.dark.md};
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;

    font-size: ${(props) => props.theme.sizes.md};
    color: white;
  }
`;
