import styled from "styled-components";
import {
  flexCenter,
  flexColumn,
  flexICenter,
} from "../../../styles/global.style";
import CustomButton from "../../global/CustomButton";
import { FaCheck } from "react-icons/fa";
import ClubScheduleDetailItem from "./ClubScheduleDetailItem";

export default function ClubScheduleItemContent({ item, isDetail }) {
  const leftPop = item.scheduleMaxParticipant - item.scheduleParticipantsNum;

  return (
    <ClubScheduleItemContentLayout $isDetail={isDetail}>
      <ClubScheduleDetailItem
        itemTitle={"일시"}
        itemBody={item.scheduleDate + item.scheduleTime}
        isDetail={isDetail}
      />
      <ClubScheduleDetailItem
        itemTitle={"위치"}
        itemBody={item.scheduleLocation}
        isDetail={isDetail}
      />
      <ClubScheduleDetailItem
        itemTitle={"비용"}
        itemBody={item.schedulePrice}
        isDetail={isDetail}
      />
      {isDetail && (
        <ClubScheduleDetailItem
          itemTitle={"내용"}
          itemBody={item.scheduleDetail}
          isDetail={isDetail}
        />
      )}
      <ClubScheduleDetailItem itemTitle={"참석"} isDetail={isDetail}>
        <ScheduleParticipantBox $isDetail={isDetail}>
          <p>{item.scheduleParticipantsNum}</p>
          <p>/</p>
          <p>{item.scheduleMaxParticipant}</p>
          <p>({leftPop}자리 남음)</p>
          {isDetail && (
            <div>
              <CustomButton
                bgColor={(props) => props.theme.colors.dark.sm}
                height={"25px"}
                width={"60px"}
                radius="0.35rem"
                color="white"
                size={(props) => props.theme.sizes.xs}
              >
                <FaCheck size={10} />
                참석
              </CustomButton>
            </div>
          )}
        </ScheduleParticipantBox>
      </ClubScheduleDetailItem>
    </ClubScheduleItemContentLayout>
  );
}

const ClubScheduleItemContentLayout = styled.div`
  ${flexColumn}
  gap:  ${(props) => (props.$isDetail ? "20px" : "8px")};
  margin-top: ${(props) => props.$isDetail && "30px"};
  margin-bottom: ${(props) => props.$isDetail && "40px"};
`;

const ScheduleParticipantBox = styled.div`
  display: flex;
  gap: ${(props) => props.$isDetail && "5px"};

  & > p:first-child {
    color: ${(props) => props.theme.colors.red.md};
  }

  & > p:last-child {
    color: ${(props) => props.theme.colors.gray.md};
    margin-left: 3px;
  }

  & > div {
    position: relative;
    margin-left: 5px;
    & > button {
      position: absolute;
      top: -4px;
    }
  }
`;
