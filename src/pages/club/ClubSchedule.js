import styled from "styled-components";
import { flexColumn } from "../../styles/global.style";
import ClubScheduleItem from "../../components/club/schedule/ClubScheduleItem";
import { useLocation } from "react-router-dom";
import AddButton from "../../components/club/schedule/AddButton";

export default function ClubSchedule() {
  const location = useLocation();
  const isClubHome = location.pathname == "/club";

  return (
    <ClubScheduleLayout $isClubHome={isClubHome}>
      <ClubScheduleItem />
      <ClubScheduleItem />
      <ClubScheduleItem isDone={true} />
      <ClubScheduleItem isDone={true} />

      {!isClubHome && <AddButton />}
    </ClubScheduleLayout>
  );
}

const ClubScheduleLayout = styled.div`
  height: ${(props) => props.$isClubHome && "50vh"};
  ${flexColumn};
  align-items: center;
  position: relative;
  overflow: hidden;
`;
