import styled from "styled-components";
import { flexCenter, flexColumn } from "../../styles/global.style";

export default function ClubPage({ title, isMore, moreOnClick, children }) {
  return (
    <ClubPageLayout>
      <ClubPageHeadBox>
        <Title>{title}</Title>
        {isMore && <Morebtn onClick={moreOnClick}>더보기</Morebtn>}
      </ClubPageHeadBox>
      {children}
    </ClubPageLayout>
  );
}

const ClubPageLayout = styled.div`
  ${flexColumn};
  padding: 10px 0;
  position: relative;
`;

const ClubPageHeadBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Morebtn = styled.span`
  ${flexCenter};

  font-size: ${(props) => props.theme.sizes.xs};
  color: ${(props) => props.theme.colors.gray.md};
`;

const Title = styled.div`
  padding: 14px 0;

  font-size: ${(props) => props.theme.sizes.xl};
  font-weight: ${(props) => props.theme.weights.lg};
`;
