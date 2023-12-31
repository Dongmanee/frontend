import styled from "styled-components";
import Layout from "../layouts/Layout";
import SignupForm from "../components/auth/signup/SignupForm";
import OtherApproach from "../components/auth/OtherApproach";
import { flexCenter, flexColumn } from "../styles/global.style";

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
  justify-content: center;
  height: 86vh;
  padding: 0 1rem;
`;
