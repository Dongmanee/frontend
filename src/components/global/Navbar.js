import {
  FaHouse,
  FaRegUser,
  FaUser,
  FaRegCalendar,
  FaCalendar,
  FaRegCommentDots,
  FaCommentDots,
} from "react-icons/fa6";
import styled from "styled-components";
import { PiHouseBold, PiHouseFill } from "react-icons/pi";

export default function Navbar({ currentPage }) {
  return (
    <NavbarLayout>
      {currentPage == "home" ? (
        <PiHouseFill size={26} />
      ) : (
        <PiHouseBold size={26} />
      )}
      {currentPage == "chat" ? (
        <FaCommentDots size={24} />
      ) : (
        <FaRegCommentDots size={24} />
      )}
      {currentPage == "calender" ? (
        <FaCalendar size={24} />
      ) : (
        <FaRegCalendar size={24} />
      )}
      {currentPage == "user" ? <FaUser size={24} /> : <FaRegUser size={24} />}
    </NavbarLayout>
  );
}

const NavbarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 25px;
`;
