import styled from "styled-components";
import bglogo from "../images/bglogo.png";
import kakaoimage from "../images/kakao_login.png";
import { flexCenter, flexColumn } from "../styles/global.style";
import CustomButton from "../components/global/CustomButton";
import Layout from "../layouts/Layout";
import LoginForm from "../components/auth/login/LoginForm";

export default function Login() {
  return (
    <Layout>
      <LogoBox>
        <img src={bglogo} />
      </LogoBox>
      <LoginForm />
    </Layout>
  );
}

const LogoBox = styled.div`
  ${flexCenter};
`;

const ButtonsCol = styled.div`
  width: 100%;
  height: 15vh;
  ${flexColumn};
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;

const KakaoBtn = styled.button`
  width: 45%;
  height: 3.5rem;
  ${flexCenter};
  border: 1px solid #fee500;
  border-radius: 0.75rem;
  background-color: #fee500;
  cursor: pointer;
`;
