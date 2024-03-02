import {flexCenter} from '../../assets/styles/global.style';

import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function OtherApproach({ isLogin }) {
  const navigate = useNavigate();

  const onClickLookingButton = () => {
    navigate("/posts");
  };

  const onClickSignButton = () => {
    navigate(isLogin ? "/signup" : "/");
  };

  return (
    <OtherApproachLayout>
      <ApproachBox
        onClick={() => {
          onClickSignButton();
        }}
      >
        {isLogin ? "회원가입" : "로그인"}
      </ApproachBox>
      <VerticalLine />
      <ApproachBox onClick={() => onClickLookingButton()}>둘러보기</ApproachBox>
    </OtherApproachLayout>
  );
}

const OtherApproachLayout = styled.div`
  ${flexCenter}
  gap: 0.5rem;
`;

const ApproachBox = styled.div`
  text-decoration: underline;
  font-size: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.colors.gray.xs};
`;

const VerticalLine = styled.div`
  border-left: 0.1rem solid ${(props) => props.theme.colors.gray.xs};
  height: 15px;
`;
