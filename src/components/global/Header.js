import { FiSettings } from "react-icons/fi";
import {
  MdMoreHoriz,
  MdOutlineArrowBackIosNew,
  MdOutlineClear,
  MdCheck,
} from "react-icons/md";
import styled from "styled-components";
import logo from "../../images/logo.png";
import { flexICenter, flexJBetween } from "../../styles/global.style";
import { IoLogInOutline } from "react-icons/io5";

export default function Header({
  left,
  center,
  right,
  onClickLeft,
  onClickRight,
  onClickCenter,
  position,
}) {
  const renderLeft = () => {
    switch (left) {
      case "logo":
        return <img src={logo} />;
      case "prev":
        return <MdOutlineArrowBackIosNew size={26} />;
      case "exit":
        return <MdOutlineClear size={30} />;
      case "chat":
        return <HeaderTitleBox>채팅</HeaderTitleBox>;
      case "calendar":
        return <HeaderTitleBox>일정</HeaderTitleBox>;
      case "profile":
        return <HeaderTitleBox>프로필</HeaderTitleBox>;
      default:
        return;
    }
  };

  const renderRight = () => {
    switch (right) {
      case "setting":
        return <FiSettings size={28} />;
      case "edit":
        return <MdMoreHoriz size={28} />;
      case "check":
        return <MdCheck size={28} />;
      case "login":
        return <IoLogInOutline size={30} />;
      default:
        return;
    }
  };

  return (
    <HeaderLayout $position={position}>
      <HeaderItem onClick={onClickLeft}>{renderLeft()}</HeaderItem>
      <HeaderItem onClick={onClickCenter}>{center ? center : ""}</HeaderItem>
      <HeaderItem onClick={onClickRight}>{renderRight()}</HeaderItem>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  width: 100vw;
  height: ${(props) => props.theme.global.header.height};
  ${flexJBetween};
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  padding: 13px 20px;

  z-index: 2;
  position: ${(props) => (props.$position ? props.$position : "fixed")};
  top: 0;
  left: 0;
  right: 0;
  border-radius: inherit;

  & > div:first-child,
  & > div:last-child {
    min-width: 2rem;
  }

  & > div:nth-child(2) {
    font-weight: ${(props) => props.theme.weights.xl};
  }
`;

const HeaderItem = styled.div`
  ${flexICenter}
  img {
    height: 30px;
  }
  font-size: ${(props) => props.theme.sizes.xxxl};
`;

const HeaderTitleBox = styled.div`
  font-size: ${(props) => props.theme.sizes.xl};
  font-weight: 600;
`;
