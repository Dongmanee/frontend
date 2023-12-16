import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexJBetween } from "../../styles/global.style";
import { navbarItems } from "../../consts/pageData";

export default function Navbar() {
  const location = useLocation();
  const nowPage = location.pathname;
  const navigate = useNavigate();

  const handlePageMove = (pageSrc) => {
    navigate(pageSrc);
  };

  return (
    <NavbarLayout>
      {navbarItems.map((item, idx) => {
        const isActive = nowPage.startsWith(item.page);
        return (
          <div key={idx} onClick={() => handlePageMove(item.page)}>
            {isActive ? item.active : item.inActive}
          </div>
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
