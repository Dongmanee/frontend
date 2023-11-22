import styled from "styled-components";
import { flexCenter, flexJBetween } from "../../styles/global.style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PageSelector = ({ pages, top }) => {
  const [active, setActive] = useState(pages[0].src);
  const navigate = useNavigate();
  const pageLength = pages?.length;

  const handlePage = (src) => {
    navigate(src);
    setActive(src);
  };

  return (
    <PageSelectorLayout $top={top}>
      {pages.map((page, idx) => (
        <Page onClick={() => handlePage(page.src)} $length={pageLength} key={idx}>
          {active == page.src ? (
            <Active>{page.name}</Active>
          ) : (
            <InActive>{page.name}</InActive>
          )}
        </Page>
      ))}
    </PageSelectorLayout>
  );
};

export default PageSelector;

PageSelector.defaultProps = {
  $length: 4,
};

const PageSelectorLayout = styled.div`
  width: 100%;
  min-height: ${(props) => props.theme.global.pageselector.height};
  ${flexJBetween};
  align-items: center;
  background-color: white;

  position: fixed;
  z-index: 2;
  top: ${(props) => (props.$top ? props.$top : props.theme.global.header.height)};
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Page = styled.div`
  width: ${(props) => `calc(100% / ${props.$length})`};
  ${flexCenter};
  padding: 10px 0;
`;

const InActive = styled.span`
  padding-bottom: 2px;

  white-space: nowrap;
  text-align: center;
  color: ${(props) => props.theme.colors.gray.xs};
`;

const Active = styled(InActive)`
  border-bottom: 1.5px solid black;
  color: black;
`;
