import styled from "styled-components";
import { flexCenter, flexJBetween } from "../../styles/global.style";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PageSelector = ({ pages, top }) => {
  const location = useLocation();
  const currentPage = location.pathname;
  const [active, setActive] = useState(pages[0].src);
  const navigate = useNavigate();
  const pageLength = pages?.length;

  const handlePage = (src) => {
    navigate(src);

    setActive(src);
  };

  useEffect(() => {
    const isRightPage = currentPage.startsWith(active);

    if (!isRightPage) {
      const rightpage = pages.find((page) => currentPage.startsWith(page.src));
      const nowpage = rightpage?.src;

      setActive(nowpage);
    }
    if (isRightPage && currentPage != active) {
      const reversedPages = [...pages].reverse();
      const rightpage = reversedPages.find((page) =>
        currentPage.startsWith(page.src)
      );
      const nowpage = rightpage?.src;

      setActive(nowpage);
    }
  }, [currentPage]);

  return (
    <PageSelectorLayout $top={top}>
      {pages.map((page, idx) => {
        return (
          <Page
            onClick={() => handlePage(page.src)}
            $length={pageLength}
            key={idx}
          >
            {active == page.src ? (
              <Active>{page.name}</Active>
            ) : (
              <InActive>{page.name}</InActive>
            )}
          </Page>
        );
      })}
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

  z-index: 2;
  position: fixed;
  top: ${(props) =>
    props.$top ? props.$top : props.theme.global.header.height};
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
