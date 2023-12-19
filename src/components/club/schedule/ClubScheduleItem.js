import styled from "styled-components";
import { flexColumn } from "../../../styles/global.style";
import ClubScheduleTitle from "./ClubScheduleTitle";
import ClubScheduleItemContent from "./ClubScheduleItemContent";
import { useNavigate } from "react-router-dom";

export default function ClubScheduleItem({ item }) {
  const isDone = item.scheduleLeftDays < 0;
  const navigate = useNavigate();
  const openScheduleDetail = (id) => {
    navigate(`${id}`);
  };
  return (
    <ClubScheduleItemsLayout
      onClick={() => openScheduleDetail(item.scheduleId)}
      $isDone={isDone}
    >
      <ClubScheduleTitle
        date={item.scheduleDate}
        left={item.scheduleLeftDays}
        title={item.scheduleName}
      />

      <ClubScheduleItemContent item={item} />
    </ClubScheduleItemsLayout>
  );
}

const ClubScheduleItemsLayout = styled.div`
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
