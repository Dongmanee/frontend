import styled from "styled-components";
import bglogo from "../images/bglogo.png";
import kakaoimage from "../images/kakao_login.png";
import { flexCenter, flexColumn } from "../styles/global.style";
import CustomButton from "../components/global/CustomButton";

export default function Login() {
  return (
    <LoginLayout>
      <LogoBox>
        <img src={bglogo} />
      </LogoBox>

      <ButtonsCol>
        <CustomButton width="45%" height="3.5rem" bgColor={"#3f3e3e"} color={"white"}>
          둘러보기
        </CustomButton>
        <KakaoBtn>
          <img src={kakaoimage} />
        </KakaoBtn>
      </ButtonsCol>
    </LoginLayout>
  );
}

const LoginLayout = styled.div`
  ${flexColumn};
  align-items: center;
`;

const LogoBox = styled.div`
  width: 100vw;
  height: 65vh;
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
