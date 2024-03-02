import React from "react";
import {flexColumn} from '../../assets/styles/global.style.js';

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { format } from "date-fns";

export default function DetailBox({ schedule }) {
  const navigate = useNavigate();
  const handleScheduleClick = (clubId, scheduleId) => {
    navigate(`/club/${clubId}/schedule/${scheduleId}`);
  };
  const time = format(new Date(schedule.scheduleDate), "a hh:mm");
  return (
    <DetailBoxLayout
      onClick={() => handleScheduleClick(schedule.clubId, schedule.scheduleId)}
    >
      {schedule && (
        <>
          <div>{time}</div>
          <DetailBoxColor $clubColor={schedule.clubColor} />
          <Detail>
            <div>{schedule.clubName}</div>
            <div>{schedule.scheduleName}</div>
          </Detail>
        </>
      )}
    </DetailBoxLayout>
  );
}

const DetailBoxLayout = styled.div`
  width: 90%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-radius: 20px;
  gap: 15px;
  padding: 10px 20px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Detail = styled.div`
  ${flexColumn}
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.sizes.xs};
  & > div:last-child {
    font-size: ${(props) => props.theme.sizes.md};
    font-weight: ${(props) => props.theme.weights.xl};
  }
`;

const DetailBoxColor = styled.div`
  width: 4px;
  height: 100%;
  /* border-top-left-radius: inherit;
  border-bottom-left-radius: inherit; */
  background-color: ${(props) => props.$clubColor};
`;
