import styled from "styled-components";
import Layout from "../layouts/Layout";
import SignupForm from "../components/auth/signup/SignupForm";
import OtherApproach from "../components/auth/OtherApproach";
import { flexCenter, flexColumn, fullSize } from "../styles/global.style";

export default function Signup() {
  return (
    <Layout headerCenter="회원가입">
      <SignupLayout>
        <SignupForm />
        <OtherApproach isLogin={false} />
      </SignupLayout>
    </Layout>
  );
}

const SignupLayout = styled.div`
  ${flexColumn}
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
