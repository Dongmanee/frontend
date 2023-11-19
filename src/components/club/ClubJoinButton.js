import styled from "styled-components";
import { flexJBetween } from "../../styles/global.style";

export default function ClubJoinButton({ deadline }) {
  return (
    <ClubJoinButtonLayout>
      <Qna>문의하기</Qna>
      <Join>
        가입하기
        <p>{deadline}</p>
      </Join>
    </ClubJoinButtonLayout>
  );
}

const ClubJoinButtonLayout = styled.div`
  width: 80%;
  height: 6vh;
  ${flexJBetween};
  border-radius: 14px;

  position: fixed;
  bottom: 2vh;
  left: 0;
  right: 0;
  margin: 0 auto;

  box-shadow: 1px 1px 10px rgb(0, 0, 0, 0.5), -1px -1px 10px rgb(0, 0, 0, 0.5);
`;

const Qna = styled.button`
  width: 30%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.white.xs};
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  background-color: ${(props) => props.theme.colors.white.xs};

  color: ${(props) => props.theme.colors.gray.md};
  font-weight: ${(props) => props.theme.weights.lg};
`;

const Join = styled.button`
  width: 70%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.dark.sm};
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  background-color: ${(props) => props.theme.colors.dark.sm};

  color: white;
  font-weight: ${(props) => props.theme.weights.lg};
  p {
    font-size: ${(props) => props.theme.sizes.xxs};
    font-weight: ${(props) => props.theme.weights.sm};
  }
`;
