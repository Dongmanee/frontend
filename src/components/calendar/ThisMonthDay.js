import styled from "styled-components";
import { flexCenter } from "../../styles/global.style";

export function ThisMonthDay({
  onClick,
  date,
  isToday,
  isThisMonth,
  isSelected,
  daySchedule,
}) {
  const day = date.slice(-2).replace(/(^0+)/, "");

  return (
    <ThisMonthDayLayout onClick={onClick} $isClickDisabled={!isThisMonth}>
      <TodayBox
        $isSelected={isSelected}
        $isToday={isToday}
        $isThisMonth={isThisMonth}
      >
        {day}
      </TodayBox>
      {daySchedule && (
        <ScheduleDotBox>
          {daySchedule.map((schedule, idx) => (
            <ScheduleDot $dotColor={schedule.clubColor}></ScheduleDot>
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
  justify-content: center;
  pointer-events: ${(props) => props.$isClickDisabled && "none"};
`;

const TodayBox = styled.div`
  color: ${(props) =>
    props.$isToday
      ? props.theme.colors.orange.md
      : props.$isThisMonth
      ? "black"
      : "lightgray"};
  padding: 8px;
  width: 20px;
  height: 20px;
  ${flexCenter}
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isSelected ? "lightgray" : "transparent"};
  font-weight: ${(props) => (props.$isToday ? props.theme.weights.xl : "500")};
`;

const ScheduleDotBox = styled.div`
  position: absolute;
  top: 40px;
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
