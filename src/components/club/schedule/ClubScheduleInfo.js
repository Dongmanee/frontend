import styled from "styled-components";

export default function ClubScheduleInfo({ name, info, pop, totalPop, isDetail }) {
  const leftPop = totalPop - pop;
  return (
    <ClubScheduleInfoLayout $isDetail={isDetail}>
      <span>{name}</span>
      <span>{info}</span>

      <span>{!isNaN(pop) && pop + "/"}</span>
      <span>{totalPop}</span>
      <span>{!isNaN(leftPop) && "(" + leftPop + "자리 남음)"}</span>
    </ClubScheduleInfoLayout>
  );
}

const ClubScheduleInfoLayout = styled.div`
  display: flex;
  gap: 8px;
  span {
    font-size: ${(props) =>
      props.$isDetail ? props.theme.sizes.md : props.theme.sizes.xs};
  }

  & > span:first-child {
    color: ${(props) => props.theme.colors.gray.md};
  }

  & > span:nth-child(3) {
    color: ${(props) => props.theme.colors.red.md};
    margin: 0 -7px;
  }

  & > span:last-child {
    color: ${(props) => (props.$isDetail ? "black" : props.theme.colors.gray.md)};
    margin-left: -5px;
  }
`;
