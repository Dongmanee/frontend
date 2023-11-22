import styled from "styled-components";
import AddButton from "../../components/club/schedule/AddButton";
import ClubScheduleItem from "../../components/club/schedule/ClubScheduleItem";
import { temp_club_schedule_item_infos } from "../../consts/tempData";
import useCheckPath from "../../hooks/useCheckPath";
import { flexColumn } from "../../styles/global.style";
import { useNavigate } from "react-router-dom";

export default function ClubSchedule() {
  const { isCheckedPath: isClubHome } = useCheckPath("/club/home");
  const navigate = useNavigate();
  const onAddSchedule = () => {
    navigate(`/club/schedule/add`);
  };

  return (
    <ClubScheduleLayout $isClubHome={isClubHome}>
      {temp_club_schedule_item_infos.map((item, idx) => (
        <ClubScheduleItem key={idx} item={item} />
      ))}

      {!isClubHome && <AddButton onClick={onAddSchedule} />}
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
