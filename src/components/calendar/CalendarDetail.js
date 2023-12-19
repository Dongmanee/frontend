import styled from "styled-components";
import { flexColumn } from "../../styles/global.style";
import DetailBox from "./Detail";

export default function CalendarDetail({ selectedDate }) {
  return (
    <CalendarDetailLayout>
      <Br />
      <span>test = {selectedDate}일이 선택됨.</span>
      <DetailBox />
      <DetailBox />
    </CalendarDetailLayout>
  );
}

const CalendarDetailLayout = styled.div`
  width: 100vw;
  height: 43vh;
  ${flexColumn};
  box-sizing: border-box;
  padding: 50px 20px 0 20px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  overflow: scroll;
  gap: 10px;

  background-color: rgba(217, 217, 217, 0.5);
`;

const Br = styled.div`
  width: 50%;
  height: 5px;
  position: absolute;
  top: 3%;
  right: 0;
  left: 0;
  margin: 0 auto;

  background-color: rgb(217, 217, 217);
`;
