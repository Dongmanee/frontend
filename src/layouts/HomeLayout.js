import styled from "styled-components";
import Header from "../components/global/Header";
import Navbar from "../components/global/Navbar";

export default function HomeLayout({
  children,
  headerLeft,
  headerRight,
  headerCenter,
  currentPage,
}) {
  return (
    <HomeLayoutLayout>
      <Header left={headerLeft} center={headerCenter} right={headerRight} />
      <Body>{children}</Body>
      <Navbar currentPage={currentPage} />
    </HomeLayoutLayout>
  );
}

const HomeLayoutLayout = styled.div`
  & > div:first-child {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  & > div:last-child {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const Body = styled.div`
  padding: 0 23px;
  margin: 60px 0;
`;
