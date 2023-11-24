import styled from "styled-components";
import OtherApproach from "../components/auth/OtherApproach";
import KakaoLogin from "../components/auth/login/KakaoLogin";
import LoginForm from "../components/auth/login/LoginForm";
import bglogo from "../images/bglogo.png";
import Layout from "../layouts/Layout";
import { flexCenter, flexColumn } from "../styles/global.style";

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
