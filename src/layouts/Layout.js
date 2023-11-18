import styled from "styled-components";
import Header from "../components/global/Header";
import Navbar from "../components/global/Navbar";

export default function Layout({
  children,
  headerLeft,
  headerRight,
  headerCenter,
  isNavbar,
  bottomButton,
}) {
  return (
    <>
      <Header left={headerLeft} center={headerCenter} right={headerRight} />
      <Body>{children}</Body>
      {isNavbar && <Navbar />}
      {bottomButton}
    </>
  );
}

const Body = styled.div`
  box-sizing: border-box;
  padding: ${(props) => props.theme.global.body.height} 5vw;
`;
