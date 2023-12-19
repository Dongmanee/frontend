import React from "react";
import styled from "styled-components";
import { flexColumn } from "../../styles/global.style";

export default function DetailBox() {
  return (
    <DetailBoxLayout>
      <DetailBoxColor />
      <Detail>
        <div>AM 9:00</div>
        <div>치과 정기 검진 예약</div>
      </Detail>
    </DetailBoxLayout>
  );
}

const DetailBoxLayout = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 1px 1px 7px black;
  background-color: white;
`;

const Detail = styled.div`
  ${flexColumn};
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;
  padding: 10px;

  font-size: ${(props) => props.theme.sizes.sm};
  & > div:last-child {
    font-weight: ${(props) => props.theme.weights.xl};
  }
`;

const DetailBoxColor = styled.div`
  width: 5%;
  height: 100%;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  background-color: green;
`;
