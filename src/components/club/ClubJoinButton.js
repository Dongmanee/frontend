import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ClubJoinButton({ clubJoinAvailable }) {
  const navigate = useNavigate();
  const { isAvailable } = clubJoinAvailable;

  const onClickButton = (page) => {
    navigate(`${page}`);
  };

  return (
    <ClubJoinButtonLayout $isAvailable={isAvailable}>
      <Qna $isAvailable={isAvailable} onClick={() => onClickButton("inquiry")}>
        문의하기
      </Qna>
      {isAvailable && (
        <Join onClick={() => onClickButton("join")}>
          가입하기
          <p>~ {clubJoinAvailable.joinPeriod}</p>
        </Join>
      )}
    </ClubJoinButtonLayout>
  );
}

const ClubJoinButtonLayout = styled.div`
  width: 80%;
  height: 6vh;

  display: grid;
  grid-template-columns: ${(props) =>
    props.$isAvailable ? "0.7fr 1.3fr" : "1fr"};
  border-radius: 14px;

  position: absolute;
  bottom: 2vh;
  left: 0;
  right: 0;
  margin: 0 auto;

  box-shadow: 1px 1px 10px rgb(0, 0, 0, 0.5), -1px -1px 10px rgb(0, 0, 0, 0.5);

  & > button {
    height: 100%;
    font-weight: ${(props) => props.theme.weights.lg};
    border: 0;
  }
`;

const Qna = styled.button`
  border-radius: inherit;
  border-top-right-radius: ${(props) => (props.$isAvailable ? "0" : "inherit")};
  border-bottom-right-radius: ${(props) =>
    props.$isAvailable ? "0" : "inherit"};
  background-color: ${(props) => props.theme.colors.white.xs};

  color: ${(props) => props.theme.colors.gray.md};
`;

const Join = styled.button`
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  background-color: ${(props) => props.theme.colors.dark.sm};

  color: white;
  p {
    font-size: ${(props) => props.theme.sizes.xxs};
    font-weight: ${(props) => props.theme.weights.sm};
  }
`;
