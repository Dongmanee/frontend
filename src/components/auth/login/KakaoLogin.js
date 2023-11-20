import styled from "styled-components";
import { flexCenter, flexColumn } from "../../../styles/global.style";
import CustomButton from "../../global/CustomButton";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function KakaoLogin() {
  return (
    <KakaoLoginLayout>
      <DivisionRow>
        <DivisionLine>
          <span>간편 로그인</span>
        </DivisionLine>
      </DivisionRow>
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
    </KakaoLoginLayout>
  );
}

const DivisionLine = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #aaa;
  line-height: 0.1em;
  margin: 10px 0 20px;
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
  margin-bottom: 1rem;
`;

const KakaoText = styled.div`
  ${flexCenter}
  gap: 0.5rem;
  color: #191919;
  font-family: "Noto Sans KR", sans-serif;
`;
