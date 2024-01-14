import { addMonths, subMonths } from "date-fns";
import { useState } from "react";
import styled from "styled-components";
import CalendarBody from "../components/calendar/CalendarBody";
import CalendarHead from "../components/calendar/CalendarHead";
import Navbar from "../components/global/Navbar";
import Layout from "../layouts/Layout";

export default function Calendar() {
  const [thisMonth, setThisMonth] = useState(new Date());

  const handleMonthPrev = () => {
    setThisMonth(subMonths(thisMonth, 1));
  };

  const handleMonthNext = () => {
    setThisMonth(addMonths(thisMonth, 1));
  };

  return (
    <Layout>
      <CalendarHead
        thisMonth={thisMonth}
        handleMonthPrev={handleMonthPrev}
        handleMonthNext={handleMonthNext}
      />
      <CalendarBody thisMonth={thisMonth} />
      <Navbar />
    </Layout>
  );
}

const CalendarLayout = styled.div``;
