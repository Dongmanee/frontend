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
import { useEffect, useState } from "react";
import styled from "styled-components";
import { temp_weeks } from "../../consts/tempData";
import { flexColumn } from "../../styles/global.style";
import CalendarDetail from "./CalendarDetail";
import { ThisMonthDay } from "./ThisMonthDay";

export default function CalendarBody({ thisMonth, monthSchedule }) {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [daySchedule, setDaySchedule] = useState();
  const monthStartDay = startOfMonth(thisMonth);
  const monthEndDay = endOfMonth(thisMonth);
  const startDay = startOfWeek(monthStartDay);
  const endDay = endOfWeek(monthEndDay);

  const handleDateClick = (day, daySchedule) => {
    setSelectedDate(day);
    setDaySchedule(daySchedule);
  };

  useEffect(() => {
    setDaySchedule(
      monthSchedule.filter(
        (item) => item.scheduleDate.slice(0, 10) == selectedDate
      )
    );
  }, []);

  const render = () => {
    let day = startDay;
    const col = [];
    let row = [];

    while (day <= endDay) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "yyyy-MM-dd");
        const daySchedule = monthSchedule.filter(
          (item) => item.scheduleDate.slice(0, 10) == formattedDate
        );

        row.push(
          <ThisMonthDay
            onClick={() => handleDateClick(formattedDate, daySchedule)}
            date={formattedDate}
            isToday={isToday(day)}
            isThisMonth={isSameMonth(day, monthStartDay)}
            isSelected={selectedDate == formattedDate}
            daySchedule={daySchedule}
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
    <>
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
      <CalendarDetail selectedDate={selectedDate} daySchedule={daySchedule} />
    </>
  );
}

const CalendarBodyLayout = styled.div`
  width: 100%;
  height: 40vh;
  margin-bottom: 20px;
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
