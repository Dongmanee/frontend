import styled from "styled-components";
import OtherApproach from "../components/auth/OtherApproach";
import KakaoLogin from "../components/auth/login/KakaoLogin";
import LoginForm from "../components/auth/login/LoginForm";
import bglogo from '../assets/images/bglogo.png'
import { flexCenter, flexColumn } from "../assets/styles/global.style";
import Layout from "../components/layouts/Layout";
export default function Login() {
  return (
    <Layout>
      <LogoBox>
        <img src={bglogo} />
      </LogoBox>
      <LoginBox>
        <LoginForm />
        <OtherApproach isLogin={true} />
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
