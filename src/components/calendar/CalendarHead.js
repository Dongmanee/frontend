import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { flexCenter } from "../../assets/styles/global.style";

import styled from "styled-components";
import { format } from "date-fns";

export default function CalendarHead({
  thisMonth,
  handleMonthPrev,
  handleMonthNext,
}) {
  return (
    <CalendarHeadLayout>
      <MdOutlineArrowBackIosNew size={24} onClick={handleMonthPrev} />
      <div>
        {format(thisMonth, "yyyy")}.{format(thisMonth, "MM")}
      </div>
      <MdOutlineArrowForwardIos size={24} onClick={handleMonthNext} />
    </CalendarHeadLayout>
  );
}

const CalendarHeadLayout = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
  ${flexCenter};
  gap: 30px;

  & > div {
    font-size: ${(props) => props.theme.sizes.txxl};
    font-weight: ${(props) => props.theme.weights.md};
    margin-top: -3px;
  }
`;
