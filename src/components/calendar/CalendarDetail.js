import styled from "styled-components";
import { flexColumn } from "../../styles/global.style";
import DetailBox from "./Detail";
import { useEffect, useState } from "react";
import { temp_calendar_detail } from "../../consts/tempData";
import { getDayOfWeek } from "../../utils/getDayOfWeek";

export default function CalendarDetail({ selectedDate }) {
  const [schedules, setSchedules] = useState();
  const day = getDayOfWeek(selectedDate);

  useEffect(() => {
    setSchedules(temp_calendar_detail);
  });

  console.log(selectedDate);

  return (
    <CalendarDetailLayout>
      <CalendarDetailTitle>
        {selectedDate} ({day})
      </CalendarDetailTitle>
      {schedules &&
        schedules.map((schedule, idx) => <DetailBox schedule={schedule} />)}
    </CalendarDetailLayout>
  );
}

const CalendarDetailLayout = styled.div`
  ${flexColumn}
  gap: 2vh;
  margin: 0 1rem;
`;

const CalendarDetailTitle = styled.div`
  font-weight: ${(props) => props.theme.weights.xl};
  font-size: ${(props) => props.theme.sizes.xxl};
`;
