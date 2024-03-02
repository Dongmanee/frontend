import CustomButton from "../../global/CustomButton";
import { flexCenter, flexColumn } from "../../../assets/styles/global.style";

import { RiKakaoTalkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";


export default function KakaoLogin() {
  return (
    <KakaoLoginLayout>
      <DivisionRow>
        <DivisionLine>
          <span>간편 로그인</span>
        </DivisionLine>
      </DivisionRow>

      <Link to="http://43.202.170.12:8080/oauth2/authorization/kakao">
        <CustomButton
          height="6vh"
          width="100%"
          bgColor="#FEE500"
          color="white"
          radius="1.5rem"
        >
          <KakaoText>
            <RiKakaoTalkFill size={24} />
            카카오로 로그인
          </KakaoText>
        </CustomButton>
      </Link>
    </KakaoLoginLayout>
  );
}

const DivisionLine = styled.div`
  width: 100%;
  margin: 10px 0 20px;
  border-bottom: 1px solid #aaa;

  text-align: center;
  line-height: 0.1em;

  & > span {
    background: #fff;
    padding: 0 10px;

    font-size: ${(props) => props.theme.sizes.xs};
  }
`;

const KakaoLoginLayout = styled.div`
  ${flexColumn}
`;

const DivisionRow = styled.div`
  margin-bottom: 1.5rem;
`;

const KakaoText = styled.div`
  ${flexCenter}
  gap: 0.5rem;

  color: #191919;
  font-family: "Noto Sans KR", sans-serif;
`;
