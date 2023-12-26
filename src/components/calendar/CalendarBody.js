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
import { temp_calender, temp_weeks } from "../../consts/tempData";
import { flexColumn } from "../../styles/global.style";
import { useState } from "react";
import { ThisMonthDay } from "./ThisMonthDay";

export default function CalendarBody({ thisMonth, handleDateClick }) {
  const [monthSchedule, setMonthSchedule] = useState(temp_calender);

  const monthStartDay = startOfMonth(thisMonth);
  const monthEndDay = endOfMonth(thisMonth);
  const startDay = startOfWeek(monthStartDay);
  const endDay = endOfWeek(monthEndDay);

  const handleScheduleFind = (day) => {};

  const render = () => {
    let day = startDay;
    const col = [];
    let row = [];

    while (day <= endDay) {
      for (let i = 0; i < 7; i++) {
        const formattedDay = format(day, "dd");
        if (isSameMonth(day, monthStartDay)) {
          row.push(
            <ThisMonthDay
              onClick={() => handleDateClick(formattedDay)}
              day={formattedDay}
              isToday={isToday(day)}
            />
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
