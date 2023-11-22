import { FaCheck } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdMoreHoriz, MdOutlineArrowBackIosNew, MdOutlineClear } from "react-icons/md";
import styled from "styled-components";
import logo from "../../images/logo.png";
import { flexJBetween } from "../../styles/global.style";

export default function Header({ left, center, right }) {
  const renderLeft = () => {
    switch (left) {
      case "logo":
        return <img src={logo} />;
      case "prev":
        return <MdOutlineArrowBackIosNew size={28} />;
      case "exit":
        return <MdOutlineClear size={30} />;
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
        return <FaCheck size={28} />;
      default:
        return;
    }
  };

  return (
    <HeaderLayout>
      <HeaderItem>{renderLeft()}</HeaderItem>
      <HeaderItem>{center ? center : ""}</HeaderItem>
      <HeaderItem>{renderRight()}</HeaderItem>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  height: ${(props) => props.theme.global.header.height};
  ${flexJBetween};
  background-color: white;
  box-sizing: border-box;
  padding: 13px 20px;

  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  & > div:nth-child(2) {
    font-weight: ${(props) => props.theme.weights.xl};
  }
`;

const HeaderItem = styled.div`
  img {
    height: 30px;
  }
  font-size: ${(props) => props.theme.sizes.xxxl};
`;
