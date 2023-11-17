import styled from 'styled-components';
import { flexCenter, flexJBetween } from '../../styles/global.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PageSelector = ({ pages }) => {
  const [active, setActive] = useState(pages[0].src);
  const navigate = useNavigate();
  const pageLength = pages?.length;

  const handlePage = (src) => {
    navigate(src);
    setActive(src);
  };

  return (
    <PageSelectorLayout>
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
  ${flexJBetween};
  align-items: center;
`;

const Page = styled.div`
  width: ${(props) => `calc(100% / ${props.$length})`};
  ${flexCenter};
  padding: 10px 0;
`;

const InActive = styled.span`
  display: inline-block;
  padding-bottom: 2px;

  white-space: nowrap;
  text-align: center;
`;

const Active = styled(InActive)`
  border-bottom: 1.5px solid black;
`;
