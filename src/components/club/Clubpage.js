import { flexCenter, flexColumn, flexICenter } from "../../assets/styles/global.style";

import styled from "styled-components";

export default function ClubPage({
  title,
  isMore,
  isMemberNum,
  moreOnClick,
  children,
}) {
  return (
    <ClubPageLayout>
      <ClubPageHeadBox>
        <Title>
          {title}
          {isMemberNum && <div>({isMemberNum})</div>}
        </Title>
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
  padding: 20px 0;
  ${flexICenter}
  gap: 0.3rem;

  font-size: ${(props) => props.theme.sizes.xl};
  font-weight: ${(props) => props.theme.weights.lg};
`;
