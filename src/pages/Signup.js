import styled from "styled-components";
import SignupForm from "../components/auth/signup/SignupForm";
import OtherApproach from "../components/auth/OtherApproach";
import Layout from "../components/layouts/Layout";
import { flexColumn } from "../assets/styles/global.style";

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
