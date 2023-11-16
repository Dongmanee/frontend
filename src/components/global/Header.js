import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import logo from "../../images/logo.png";

export default function Header({ left, center, right }) {
  return (
    <HeaderLayout>
      <HeaderItem>{left == "logo" && <img src={logo} />}</HeaderItem>
      <HeaderItem>{center ? <div>{center}</div> : ""}</HeaderItem>
      <HeaderItem>{right == "setting" && <FiSettings size={28} />}</HeaderItem>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
`;

const HeaderItem = styled.div`
  img {
    height: 30px;
  }
`;
