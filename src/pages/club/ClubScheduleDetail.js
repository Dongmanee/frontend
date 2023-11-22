import styled from "styled-components";
import ClubUserList from "../../components/club/ClubUserList";
import ClubScheduleItemContent from "../../components/club/schedule/ClubScheduleItemContent";
import ClubScheduleTitle from "../../components/club/schedule/ClubScheduleTitle";
import {
  temp_club_schedule_detail_item_infos,
  temp_club_users,
} from "../../consts/tempData";
import { flexColumn } from "../../styles/global.style";

export default function ClubScheduleDetail() {
  return (
    <ClubScheduleDetailLayout>
      <ClubScheduleTitle
        isDetail={true}
        date="11/11 (토)"
        left="D-2"
        title="토요일 모임"
      />
      <ClubScheduleItemContent
        isDetail={true}
        item={temp_club_schedule_detail_item_infos}
      />

      <ClubScheduleParticipantCol>
        <ClubUserList users={temp_club_users} />
      </ClubScheduleParticipantCol>
    </ClubScheduleDetailLayout>
  );
}

const ClubScheduleDetailLayout = styled.div`
  box-sizing: border-box;
  padding: 30px;
`;

const ClubScheduleParticipantCol = styled.div`
  ${flexColumn};
  margin-top: -20px;
`;
