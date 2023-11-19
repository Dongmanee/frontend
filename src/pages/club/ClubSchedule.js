import styled from "styled-components";
import { flexColumn } from "../../styles/global.style";
import ClubScheduleItem from "../../components/club/schedule/ClubScheduleItem";
import { useLocation } from "react-router-dom";

export default function ClubSchedule() {
  const location = useLocation();
  const isClubHome = location.pathname == "/club";

  return (
    <ClubScheduleLayout $isClubHome={isClubHome}>
      <ClubScheduleItem />
      <ClubScheduleItem />
      <ClubScheduleItem />
      <ClubScheduleItem />
    </ClubScheduleLayout>
  );
}

const ClubScheduleLayout = styled.div`
  height: ${(props) => props.$isClubHome && "50vh"};
  ${flexColumn};
  align-items: center;
  overflow: hidden;
`;
