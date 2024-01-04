import styled from "styled-components";
import { flexColumn } from "../../styles/global.style";
import DetailBox from "./Detail";
import { useEffect, useState } from "react";
import { temp_calendar_detail } from "../../consts/tempData";

export default function CalendarDetail({ selectedDate }) {
  const [schedules, setSchedules] = useState();

  useEffect(() => {
    setSchedules(temp_calendar_detail);
  });

  return (
    <CalendarDetailLayout>
      {schedules &&
        schedules.map((schedule, idx) => <DetailBox schedule={schedule} />)}
    </CalendarDetailLayout>
  );
}

const CalendarDetailLayout = styled.div`
  ${flexColumn}
  gap: 1.2rem;
  margin: 0 1.5rem;
`;
