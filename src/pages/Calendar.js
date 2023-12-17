import { addMonths, subMonths } from "date-fns";
import { useState } from "react";
import styled from "styled-components";
import CalendarBody from "../components/calendar/CalendarBody";
import CalendarDetail from "../components/calendar/CalendarDetail";
import CalendarHead from "../components/calendar/CalendarHead";
import Navbar from "../components/global/Navbar";
import Layout from "../layouts/Layout";

export default function Calendar() {
  const [thisMonth, setThisMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [detailOpen, setDetailOpen] = useState(false);

  const handleMonthPrev = () => {
    setThisMonth(subMonths(thisMonth, 1));
  };
  const handleMonthNext = () => {
    setThisMonth(addMonths(thisMonth, 1));
  };
  const handleDateClick = (day) => {
    setDetailOpen(true);
    setSelectedDate(day);
  };
  return (
    <Layout headerLeft={"prev"}>
      <CalendarLayout $isDetailOpen={detailOpen}>
        <CalendarHead
          thisMonth={thisMonth}
          isDetailOpen={detailOpen}
          handleMonthPrev={handleMonthPrev}
          handleMonthNext={handleMonthNext}
        />
        <CalendarBody thisMonth={thisMonth} handleDateClick={handleDateClick} />
        {detailOpen ? <CalendarDetail selectedDate={selectedDate} /> : <Navbar />}
      </CalendarLayout>
    </Layout>
  );
}

const CalendarLayout = styled.div`
  margin-top: ${(props) => (props.$isDetailOpen ? "0" : "5vh")};
`;
