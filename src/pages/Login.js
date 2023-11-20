import styled from "styled-components";
import bglogo from "../images/bglogo.png";
import kakaoimage from "../images/kakao_login.png";
import { flexCenter, flexColumn } from "../styles/global.style";
import CustomButton from "../components/global/CustomButton";
import Layout from "../layouts/Layout";
import LoginForm from "../components/auth/login/LoginForm";
import KakaoLogin from "../components/auth/login/KakaoLogin";
import OtherApproach from "../components/auth/login/OtherApproach";

export default function Login() {
  return (
    <Layout>
      <LogoBox>
        <img src={bglogo} />
      </LogoBox>
      <LoginBox>
        <LoginForm />
        <OtherApproach />
        <KakaoLogin />
      </LoginBox>
    </Layout>
  );
}

const LogoBox = styled.div`
  ${flexCenter};
`;

const LoginBox = styled.div`
  ${flexColumn}
  gap: 3rem;
  padding: 0 2rem;
  margin-top: 3rem;
`;
