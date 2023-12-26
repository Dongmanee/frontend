import styled from "styled-components";
import { flexColumn } from "../../styles/global.style";
import DetailBox from "./Detail";

export default function CalendarDetail({ selectedDate }) {
  return (
    <CalendarDetailLayout>
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
    </CalendarDetailLayout>
  );
}

const CalendarDetailLayout = styled.div`
  ${flexColumn}
  gap: 1rem;
`;
