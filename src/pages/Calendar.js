import { addMonths, format, subMonths } from "date-fns";
import { useState } from "react";
import styled from "styled-components";
import CalendarBody from "../components/calendar/CalendarBody";
import CalendarDetail from "../components/calendar/CalendarDetail";
import CalendarHead from "../components/calendar/CalendarHead";
import Navbar from "../components/global/Navbar";
import Layout from "../layouts/Layout";

export default function Calendar() {
  const [thisMonth, setThisMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const handleMonthPrev = () => {
    setThisMonth(subMonths(thisMonth, 1));
  };

  const handleMonthNext = () => {
    setThisMonth(addMonths(thisMonth, 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <Layout>
      <CalendarHead
        thisMonth={thisMonth}
        handleMonthPrev={handleMonthPrev}
        handleMonthNext={handleMonthNext}
      />
      <CalendarBody
        thisMonth={thisMonth}
        selectedDate={selectedDate}
        handleDateClick={handleDateClick}
      />
      <CalendarDetail selectedDate={selectedDate} />
      <Navbar />
    </Layout>
  );
}

const CalendarLayout = styled.div``;
