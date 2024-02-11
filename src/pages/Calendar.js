import { addMonths, subMonths } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CalendarBody from "../components/calendar/CalendarBody";
import CalendarHead from "../components/calendar/CalendarHead";
import Navbar from "../components/global/Navbar";
import Layout from "../layouts/Layout";
import { temp_calendar_detail } from "../consts/tempData";

export default function Calendar() {
  const [thisMonth, setThisMonth] = useState(new Date());
  const [monthSchedule, setMonthSchedule] = useState();

  const handleMonthPrev = () => {
    setThisMonth(subMonths(thisMonth, 1));
  };

  const handleMonthNext = () => {
    setThisMonth(addMonths(thisMonth, 1));
  };

  useEffect(() => {
    setMonthSchedule(temp_calendar_detail);
  }, [thisMonth]);

  return (
    <Layout headerLeft="calendar">
      <CalendarHead
        thisMonth={thisMonth}
        handleMonthPrev={handleMonthPrev}
        handleMonthNext={handleMonthNext}
      />
      {monthSchedule && (
        <CalendarBody thisMonth={thisMonth} monthSchedule={monthSchedule} />
      )}
      <Navbar />
    </Layout>
  );
}
