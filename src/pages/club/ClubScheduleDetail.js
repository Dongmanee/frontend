import styled from "styled-components";
import ClubUserList from "../../components/club/ClubUserList";
import ClubScheduleInfo from "../../components/club/schedule/ClubScheduleInfo";
import ClubScheduleTitle from "../../components/club/schedule/ClubScheduleTitle";
import {
  temp_club_schedule_detail_item_infos,
  temp_club_schedule_detail_item_names,
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

      <ClubScheduleInfoCol>
        {temp_club_schedule_detail_item_infos.map((item, idx) => {
          const isLastIdx = idx == temp_club_schedule_detail_item_infos.length - 1;
          return (
            <ClubScheduleInfo
              key={idx}
              name={temp_club_schedule_detail_item_names[idx].name}
              info={item.info}
              pop={item.pop && item.pop}
              totalPop={item.totalPop}
              isDetail={true}
              isLastIdx={isLastIdx}
            />
          );
        })}
      </ClubScheduleInfoCol>

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

const ClubScheduleInfoCol = styled.div`
  ${flexColumn};
  gap: 30px;
  margin: 30px 0;
`;

const ClubScheduleParticipantCol = styled.div`
  ${flexColumn};
`;
