import { addMonths, subMonths } from "date-fns";
import { useState } from "react";
import styled from "styled-components";
import CalendarBody from "../components/calendar/CalendarBody";
import CalendarBottomSheet from "../components/calendar/CalendarBottomSheet";
import CalendarHead from "../components/calendar/CalendarHead";
import Navbar from "../components/global/Navbar";
import Layout from "../layouts/Layout";

export default function Calendar() {
  const [thisMonth, setThisMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleMonthPrev = () => {
    setThisMonth(subMonths(thisMonth, 1));
  };

  const handleMonthNext = () => {
    setThisMonth(addMonths(thisMonth, 1));
  };

  const handleDateClick = (day) => {
    setIsDetailOpen(true);
    setSelectedDate(day);
  };

  return (
    <Layout headerLeft={"prev"}>
      <CalendarLayout $isDetailOpen={isDetailOpen}>
        <CalendarHead
          thisMonth={thisMonth}
          isDetailOpen={isDetailOpen}
          handleMonthPrev={handleMonthPrev}
          handleMonthNext={handleMonthNext}
        />
        <CalendarBody thisMonth={thisMonth} handleDateClick={handleDateClick} />
        {isDetailOpen ? (
          <CalendarBottomSheet
            isDetailOpen={isDetailOpen}
            setIsDetailOpen={setIsDetailOpen}
          />
        ) : (
          <Navbar />
        )}
      </CalendarLayout>
    </Layout>
  );
}

const CalendarLayout = styled.div`
  margin-top: ${(props) => (props.$isDetailOpen ? "0" : "5vh")};
`;
