import {
  FaHouse,
  FaRegUser,
  FaRegCalendar,
  FaRegCommentDots,
} from "react-icons/fa6";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarLayout>
      <FaHouse size={24} />
      <FaRegCommentDots size={24} />
      <FaRegCalendar size={24} />
      <FaRegUser size={24} />
    </NavbarLayout>
  );
}

const NavbarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 25px;
`;
