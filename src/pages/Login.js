import styled from "styled-components";
import OtherApproach from "../components/auth/OtherApproach";
import KakaoLogin from "../components/auth/login/KakaoLogin";
import LoginForm from "../components/auth/login/LoginForm";
import bglogo from '../assets/images/bglogo.png'
import { flexCenter, flexColumn } from "../assets/styles/global.style";

export default function Login() {
  return (
    <LoginLayout>
      <LogoBox>
        <img src={bglogo} />
      </LogoBox>

      <LoginBox>
        <LoginForm />
        <OtherApproach isLogin={true} />
        <KakaoLogin />
      </LoginBox>
    </LoginLayout>
  );
}

const LoginLayout = styled.div`
  padding:0 5vw;
`

const LogoBox = styled.div`
  ${flexCenter};
  max-height: 30vh;
`;

const LoginBox = styled.div`
  ${flexColumn}
  gap: 3rem;
  padding: 0 2rem;
  margin-top: 3rem;
`;
