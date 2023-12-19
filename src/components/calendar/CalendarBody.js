import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import styled from "styled-components";
import { temp_weeks } from "../../consts/tempData";
import { flexColumn } from "../../styles/global.style";

export default function CalendarBody({ thisMonth, handleDateClick }) {
  const monthStartDay = startOfMonth(thisMonth);
  const monthEndDay = endOfMonth(thisMonth);
  const startDay = startOfWeek(monthStartDay);
  const endDay = endOfWeek(monthEndDay);
  const today = new Date();

  const render = () => {
    let day = startDay;
    const col = [];
    let row = [];

    while (day <= endDay) {
      for (let i = 0; i < 7; i++) {
        const formattedDay = format(day, "dd");
        if (isSameMonth(day, monthStartDay)) {
          if (isToday(day))
            row.push(
              <Today onClick={() => handleDateClick(formattedDay)} key={formattedDay}>
                {formattedDay}
              </Today>
            );
          else
            row.push(
              <div onClick={() => handleDateClick(formattedDay)} key={formattedDay}>
                {formattedDay}
              </div>
            );
        } else
          row.push(
            <AnotherMonthDay
              onClick={() => handleDateClick(formattedDay)}
              key={formattedDay}
            >
              {formattedDay}
            </AnotherMonthDay>
          );
        day = addDays(day, 1);
      }
      col.push(row);
      row = [];
    }
    return col;
  };

  return (
    <CalendarBodyLayout>
      <WeekRowHead>
        {temp_weeks.map((item, idx) => (
          <div key={idx}>{item.name}</div>
        ))}
      </WeekRowHead>

      {render().map((col, colIdx) => (
        <WeekRow key={colIdx}>{col.map((day) => day)}</WeekRow>
      ))}
    </CalendarBodyLayout>
  );
}

const CalendarBodyLayout = styled.div`
  width: 100%;
  height: 40vh;
  ${flexColumn};
`;

const WeekRow = styled.div`
  width: 100%;
  height: calc(100% / 6);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
`;

const WeekRowHead = styled(WeekRow)`
  font-weight: ${(props) => props.theme.weights.xl};
`;

const AnotherMonthDay = styled.div`
  color: lightgray;
`;

const Today = styled.div`
  color: ${(props) => props.theme.colors.orange.md};
  font-weight: ${(props) => props.theme.weights.xl};
`;
