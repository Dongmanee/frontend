import styled from "styled-components";

export function ThisMonthDay({ onClick, day, isToday, daySchedule }) {
  return (
    <ThisMonthDayLayout onClick={onClick}>
      <TodayBox $isToday={isToday}>{day}</TodayBox>
      {daySchedule && (
        <ScheduleDotBox>
          {daySchedule.map((schedule, idx) => (
            <ScheduleDot></ScheduleDot>
          ))}
        </ScheduleDotBox>
      )}
    </ThisMonthDayLayout>
  );
}

const ThisMonthDayLayout = styled.div``;

const TodayBox = styled.div`
  color: ${(props) =>
    props.$isToday ? props.theme.colors.orange.md : "black"};
  font-weight: ${(props) => (props.$isToday ? props.theme.weights.xl : "500")};
`;

const ScheduleDotBox = styled.div``;

const ScheduleDot = styled.div``;
