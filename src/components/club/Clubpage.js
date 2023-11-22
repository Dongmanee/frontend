import styled from "styled-components";
import { flexCenter, flexColumn } from "../../styles/global.style";

export default function ClubPage({
  title,
  isMore,
  moretop,
  moreright,
  moreleft,
  morebottom,
  moreOnClick,
  children,
}) {
  const test = () => {
    console.log(1);
  };
  const styles = { moretop, moreright, moreleft, morebottom };
  return (
    <ClubPageLayout>
      <Title>{title}</Title>
      {isMore && (
        <Morebtn {...styles} onClick={moreOnClick}>
          더보기
        </Morebtn>
      )}
      {children}
    </ClubPageLayout>
  );
}

const ClubPageLayout = styled.div`
  ${flexColumn};
  padding: 10px 0;
  position: relative;
`;

const Morebtn = styled.span`
  ${flexCenter};
  position: absolute;
  top: ${(props) => props.moretop};
  bottom: ${(props) => props.morebottom};
  right: ${(props) => props.moreright};
  left: ${(props) => props.moreleft};

  font-size: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.colors.gray.md};
`;

const Title = styled.div`
  padding: 14px 0;

  font-size: ${(props) => props.theme.sizes.xl};
  font-weight: ${(props) => props.theme.weights.lg};
`;
