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
import { useState, useEffect } from "react";
import { ThisMonthDay } from "./ThisMonthDay";

export default function CalendarBody({ thisMonth, handleDateClick }) {
  const [monthSchedule, setMonthSchedule] = useState();

  const monthStartDay = startOfMonth(thisMonth);
  const monthEndDay = endOfMonth(thisMonth);
  const startDay = startOfWeek(monthStartDay);
  const endDay = endOfWeek(monthEndDay);

  useEffect(() => {
    setMonthSchedule(temp_calender);
  });

  const render = () => {
    let day = startDay;
    const col = [];
    let row = [];

    while (day <= endDay) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "yyyy-MM-dd");
        const daySchedule = monthSchedule.find(
          (item) => item.calenderDate == formattedDate
        );

        row.push(
          <ThisMonthDay
            onClick={() => handleDateClick(formattedDate)}
            date={formattedDate}
            isToday={isToday(day)}
            isThisMonth={isSameMonth(day, monthStartDay)}
            daySchedule={daySchedule?.calenderSchedule}
          />
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
      {monthSchedule &&
        render().map((col, colIdx) => (
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
