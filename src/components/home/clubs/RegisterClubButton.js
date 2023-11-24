import styled from "styled-components";
import { flexCenter } from "../../../styles/global.style";
import { useNavigate } from "react-router-dom";

export default function RegisterClubButton() {
  const navigate = useNavigate();

  const onClickRegisterButton = () => {
    navigate("register");
  };

  return (
    <RegisterClubButtonLayout onClick={onClickRegisterButton}>
      동아리 등록하기
    </RegisterClubButtonLayout>
  );
}

const RegisterClubButtonLayout = styled.button`
  height: 7vh;
  width: 90%;
  ${flexCenter};
  position: fixed;
  bottom: 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.dark.sm};
  color: white;
  font-size: ${(props) => props.theme.sizes.lg};
  font-family: "Noto Sans KR", sans-serif;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
