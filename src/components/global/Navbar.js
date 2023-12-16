import React from "react";
import {
  FaCalendar,
  FaCommentDots,
  FaRegCalendar,
  FaRegCommentDots,
  FaRegUser,
  FaUser,
} from "react-icons/fa6";
import { PiHouseBold, PiHouseFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { flexJBetween } from "../../styles/global.style";

export default function Navbar() {
  const location = useLocation();
  const nowPage = location.pathname;

  const navbarItems = [
    {
      page: "/home",
      active: <PiHouseFill size={26} />,
      inActive: <PiHouseBold size={26} />,
    },
    {
      page: "/chat",
      active: <FaCommentDots size={24} />,
      inActive: <FaRegCommentDots size={24} />,
    },
    {
      page: "/calendar",
      active: <FaCalendar size={24} />,
      inActive: <FaRegCalendar size={24} />,
    },
    {
      page: "/profile",
      active: <FaUser size={24} />,
      inActive: <FaRegUser size={24} />,
    },
  ];

  return (
    <NavbarLayout>
      {navbarItems.map((item, idx) => {
        const isActive = nowPage.startsWith(item.page);
        return (
          <React.Fragment key={idx}>
            {isActive ? item.active : item.inActive}
          </React.Fragment>
        );
      })}
    </NavbarLayout>
  );
}

const NavbarLayout = styled.div`
  ${flexJBetween};
  background-color: white;
  padding: 13px 25px;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
