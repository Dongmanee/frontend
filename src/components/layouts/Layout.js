import styled from "styled-components";
import Header from "../global/Header";
import Navbar from "../global/Navbar";

export default function Layout({
  children,
  headerLeft,
  headerRight,
  headerCenter,
  headerPosition,
  isNavbar,
  bottomButton,
  onClickLeft,
  onClickRight,
  onClickCenter,
}) {
  return (
    <>
      <Header
        left={headerLeft}
        center={headerCenter}
        right={headerRight}
        position={headerPosition}
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
        onClickCenter={onClickCenter}
      />
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
