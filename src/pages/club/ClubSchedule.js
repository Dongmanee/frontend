import styled from "styled-components";
import AddButton from "../../components/club/schedule/AddButton";
import ClubScheduleItem from "../../components/club/schedule/ClubScheduleItem";
import { temp_club_schedule_item_infos } from "../../consts/tempData";
import useCheckPath from "../../hooks/useCheckPath";
import { flexColumn } from "../../styles/global.style";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ClubSchedule() {
  const { isCheckedPath: isClubHome } = useCheckPath("schedule");
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState();

  const onAddSchedule = () => {
    navigate(`add`);
  };

  useEffect(() => {
    const temp_data = isClubHome
      ? temp_club_schedule_item_infos.slice(0, 2)
      : temp_club_schedule_item_infos;
    setSchedules(temp_data);
  }, []);

  return (
    <ClubScheduleLayout $isClubHome={isClubHome}>
      {schedules &&
        schedules.map((item, idx) => (
          <ClubScheduleItem key={idx} item={item} />
        ))}

      {!isClubHome && <AddButton onClick={onAddSchedule} />}
    </ClubScheduleLayout>
  );
}

const ClubScheduleLayout = styled.div`
  ${flexColumn};
  align-items: center;
  position: relative;
  overflow: hidden;
`;
