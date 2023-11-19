import styled from "styled-components";

export default function ClubScheduleTitle({ date, left, title, isDetail }) {
  const isLeft = left == "done" ? "일정완료" : left;
  return (
    <ClubScheduleTitleLayout $isDetail={isDetail}>
      <div>
        <span>{date}</span>
        <span>{isLeft}</span>
      </div>
      <p>{title}</p>
    </ClubScheduleTitleLayout>
  );
}

const ClubScheduleTitleLayout = styled.div`
  line-height: ${(props) => (props.$isDetail ? "200%" : "150%")};
  font-size: ${(props) => props.$isDetail && "20px"};
  font-weight: ${(props) => props.theme.weights.lg};

  & > div > span:last-child {
    margin-left: 10px;
    color: ${(props) => props.theme.colors.red.md};
  }
`;
