import styled from "styled-components";

export default function ClubScheduleTitle({ date, left, title }) {
  return (
    <ClubScheduleTitleLayout>
      <div>
        <span>{date}</span>
        <span>{left}</span>
      </div>
      <p>{title}</p>
    </ClubScheduleTitleLayout>
  );
}

const ClubScheduleTitleLayout = styled.div`
  line-height: 150%;
  font-weight: ${(props) => props.theme.weights.lg};
  & > div > span:last-child {
    color: ${(props) => props.theme.colors.red.md};
  }
`;
