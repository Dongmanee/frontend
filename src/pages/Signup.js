import styled from "styled-components";
import RegisterInput from "../components/global/register/RegisterInput";
import Layout from "../layouts/Layout";
import { flexColumn } from "../styles/global.style";
import RegisterButton from "../components/global/register/RegisterButton";
import CustomButton from "../components/global/CustomButton";
import SignupForm from "../components/auth/signup/SignupForm";

export default function Signup() {
  return (
    <Layout headerCenter="회원가입">
      <SignupForm />
    </Layout>
  );
}
