import styled from 'styled-components';
import Header from '../components/global/Header';
import Navbar from '../components/global/Navbar';

export default function Layout({
  children,
  headerLeft,
  headerRight,
  headerCenter,
  currentPage,
  isNavbar,
}) {
  return (
    <>
      <Header left={headerLeft} center={headerCenter} right={headerRight} />
      <Body>{children}</Body>
      <NavbarBox>{isNavbar && <Navbar currentPage={currentPage} />}</NavbarBox>
    </>
  );
}

const Body = styled.div`
  box-sizing: border-box;
  padding: ${(props) => props.theme.global.header.height} 23px 0 23px;
`;

const NavbarBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
