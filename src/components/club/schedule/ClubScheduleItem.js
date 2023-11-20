import styled from "styled-components";
import {
  temp_club_schedule_item_infos,
  temp_club_schedule_item_names,
} from "../../../consts/tempData";
import { flexColumn } from "../../../styles/global.style";
import ClubScheduleInfo from "./ClubScheduleInfo";
import ClubScheduleTitle from "./ClubScheduleTitle";

export default function ClubScheduleItem({ isDone }) {
  const left = isDone ? "done" : "D-2";
  return (
    <ClubScheduleItemLayout $isDone={isDone}>
      <ClubScheduleTitle date={"11/11 (토)"} left={left} title={"토요일 모임"} />

      {temp_club_schedule_item_infos.map((item, idx) => (
        <ClubScheduleInfo
          key={idx}
          name={temp_club_schedule_item_names[idx].name}
          info={item.info}
          pop={item.pop && item.pop}
          totalPop={item.totalPop}
        />
      ))}
    </ClubScheduleItemLayout>
  );
}

const ClubScheduleItemLayout = styled.div`
  width: 90%;
  height: 30%;
  min-height: 200px;
  ${flexColumn};
  gap: 12px;
  position: relative;
  box-sizing: border-box;
  padding: 30px;
  margin: 20px 0;
  border-radius: 20px;
  box-shadow: 1px 1px 10px rgb(0, 0, 0, 0.2);
  background-color: ${(props) => (props.$isDone ? "rgb(0,0,0,0.2)" : "white")};
`;
