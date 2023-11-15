import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import logo from "../../images/logo.png";

export default function Header({ left, center, right }) {
  return (
    <Wrapper>
      <Item>{left == "logo" && <img src={logo} />}</Item>
      <div>{center ? <div>{center}</div> : ""}</div>
      <div>{right == "setting" && <FiSettings size={28} />}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
`;

const Item = styled.div`
  img {
    height: 30px;
  }
`;
