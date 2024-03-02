import styled from "styled-components";
import ClubUserList from "../../components/club/ClubUserList";
import ClubScheduleItemContent from "../../components/club/schedule/ClubScheduleItemContent";
import ClubScheduleTitle from "../../components/club/schedule/ClubScheduleTitle";
import {
  temp_club_schedule_detail_item_infos,
  temp_club_users,
} from "../../consts/tempData";
import { flexColumn } from "../../assets/styles/global.style";
import { useState } from "react";

export default function ClubScheduleDetail() {
  const [item, setItem] = useState(temp_club_schedule_detail_item_infos);
  const [participants, setParticipants] = useState(temp_club_users);

  return (
    <ClubScheduleDetailLayout>
      <ClubScheduleTitle
        isDetail={true}
        date={item.scheduleDate}
        left={item.scheduleLeftDays}
        title={item.scheduleName}
      />
      <ClubScheduleItemContent isDetail={true} item={item} />

      <ClubScheduleParticipantCol>
        <ClubUserList users={participants} />
      </ClubScheduleParticipantCol>
    </ClubScheduleDetailLayout>
  );
}

const ClubScheduleDetailLayout = styled.div`
  box-sizing: border-box;
  padding: 30px;
`;

const ClubScheduleParticipantCol = styled.div`
  /* ${flexColumn}; */
`;
