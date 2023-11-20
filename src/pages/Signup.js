import styled from "styled-components";
import Layout from "../layouts/Layout";
import SignupForm from "../components/auth/signup/SignupForm";
import OtherApproach from "../components/auth/OtherApproach";
import { flexColumn } from "../styles/global.style";

export default function Signup() {
  return (
    <Layout headerCenter="회원가입">
      <SignupForm />
      <OtherApproach isLogin={false} />
    </Layout>
  );
}
