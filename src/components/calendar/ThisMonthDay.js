import styled from "styled-components";

export function ThisMonthDay({
  onClick,
  day,
  isToday,
  isThisMonth,
  daySchedule,
}) {
  return (
    <ThisMonthDayLayout onClick={onClick} onFocus={() => console.log("아아")}>
      <TodayBox $isToday={isToday} $isThisMonth={isThisMonth}>
        {day}
      </TodayBox>
      {daySchedule && (
        <ScheduleDotBox>
          {daySchedule.map((schedule, idx) => (
            <ScheduleDot $dotColor={schedule.color}></ScheduleDot>
          ))}
        </ScheduleDotBox>
      )}
    </ThisMonthDayLayout>
  );
}

const ThisMonthDayLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodayBox = styled.div`
  color: ${(props) =>
    props.$isToday
      ? props.theme.colors.orange.md
      : props.$isThisMonth
      ? "black"
      : "lightgray"};
  font-weight: ${(props) => (props.$isToday ? props.theme.weights.xl : "500")};
`;

const ScheduleDotBox = styled.div`
  position: absolute;
  top: 25px;
  display: flex;
  gap: 4px;
  justify-content: center;
`;

const ScheduleDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${(props) => props.$dotColor};
`;
