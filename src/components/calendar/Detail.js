import React from "react";
import styled from "styled-components";
import { flexColumn } from "../../styles/global.style";
import { useNavigate } from "react-router-dom";

export default function DetailBox({ schedule }) {
  const navigate = useNavigate();
  const handleScheduleClick = (clubId, scheduleId) => {
    navigate(`/club/${clubId}/schedule/${scheduleId}`);
  };

  return (
    <DetailBoxLayout
      onClick={() => handleScheduleClick(schedule.clubId, schedule.scheduleId)}
    >
      {schedule && (
        <>
          <DetailBoxColor $clubColor={schedule.clubColor} />
          <Detail>
            <div>{schedule.scheduleTime}</div>
            <div>{schedule.scheduleName}</div>
          </Detail>
        </>
      )}
    </DetailBoxLayout>
  );
}

const DetailBoxLayout = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
`;

const Detail = styled.div`
  ${flexColumn};
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 15px;

  font-size: ${(props) => props.theme.sizes.sm};
  & > div:last-child {
    font-size: ${(props) => props.theme.sizes.md};
    font-weight: ${(props) => props.theme.weights.xl};
  }
`;

const DetailBoxColor = styled.div`
  width: 5%;
  height: 100%;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  background-color: ${(props) => props.$clubColor};
`;
