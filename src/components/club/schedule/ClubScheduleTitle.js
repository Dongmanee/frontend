import styled from "styled-components";

export default function ClubScheduleTitle({ date, left, title }) {
  const isLeft = left == "done" ? "일정완료" : left;
  return (
    <ClubScheduleTitleLayout>
      <div>
        <span>{date}</span>
        <span>{isLeft}</span>
      </div>
      <p>{title}</p>
    </ClubScheduleTitleLayout>
  );
}

const ClubScheduleTitleLayout = styled.div`
  line-height: 150%;
  font-weight: ${(props) => props.theme.weights.lg};
  & > div > span:last-child {
    margin-left: 10px;
    color: ${(props) => props.theme.colors.red.md};
  }
`;
