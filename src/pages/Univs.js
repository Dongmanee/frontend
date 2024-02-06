import styled from "styled-components";
import Layout from "../layouts/Layout";
import { FaSchool, FaArrowRight } from "react-icons/fa";
import CustomInput from "../components/global/CustomInputs";
import { flexColumn, flexJBetween } from "../styles/global.style";
import { temp_univs_list } from "../consts/tempData";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/cookies";

export default function Univs() {
  const navigate = useNavigate();
  const isLogin = getCookie("accessToken") != undefined;

  const handleLoginClick = () => {
    navigate("/");
  };

  const handleUnivCardClick = (univId, univName) => {
    navigate(`${univId}`, { state: univName });
  };

  return (
    <Layout
      headerLeft="logo"
      headerRight={isLogin ? "" : "login"}
      onClickRight={isLogin ? undefined : handleLoginClick}
    >
      <NonMembersInitialLayout>
        <FaSchool size="60" />
        <div>둘러보고 싶은 학교가 있나요?</div>
        <CustomInput
          placeholder="학교명을 입력해주세요"
          padding="0.4rem 1rem"
          border="0.05rem solid"
          fontSize="1rem"
          width="100%"
        />
        <UnivListBox>
          {temp_univs_list.map((univ) => (
            <UnivListCard
              onClick={() => handleUnivCardClick(univ.univId, univ.univName)}
            >
              <div>{univ.univName}</div>
              <FaArrowRight />
            </UnivListCard>
          ))}
        </UnivListBox>
      </NonMembersInitialLayout>
    </Layout>
  );
}

const NonMembersInitialLayout = styled.div`
  ${flexColumn}
  align-items: center;
  margin: 0 3rem;
  gap: 2.3rem;
  height: calc(100vh - ${(props) => props.theme.global.body.height}* 2);
  & > svg {
    color: #ffae02;
  }
`;

const UnivListBox = styled.div`
  ${flexColumn}
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  height: 80%;
  overflow-y: scroll;
`;

const UnivListCard = styled.div`
  ${flexJBetween}
  width: 100%;
  font-size: 1.1rem;
`;
