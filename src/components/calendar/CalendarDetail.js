import styled from "styled-components";
import { flexColumn } from "../../styles/global.style";
import { getDayOfWeek } from "../../utils/getDayOfWeek";
import DetailBox from "./Detail";

export default function CalendarDetail({ selectedDate, daySchedule }) {
  const day = getDayOfWeek(selectedDate);

  return (
    <CalendarDetailLayout>
      <CalendarDetailTitle>
        {selectedDate} ({day})
      </CalendarDetailTitle>
      {daySchedule &&
        daySchedule.map((schedule, idx) => <DetailBox schedule={schedule} />)}
      {daySchedule.length == 0 && (
        <NoScheduleBox>일정이 없습니다</NoScheduleBox>
      )}
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

const NoScheduleBox = styled.div`
  margin-top: 10px;
  font-size: ${(props) => props.theme.sizes.xl};
`;
