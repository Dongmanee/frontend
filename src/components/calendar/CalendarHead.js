import { format } from "date-fns";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import styled from "styled-components";
import { flexCenter } from "../../styles/global.style";

export default function CalendarHead({
  thisMonth,
  isDetailOpen,
  handleMonthPrev,
  handleMonthNext,
}) {
  return (
    <CalendarHeadLayout $isDetailOpen={isDetailOpen}>
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
  height: 100px;
  ${flexCenter};
  margin-bottom: ${(props) => (props.$isDetailOpen ? "0" : "80px")};
  gap: 30px;

  & > div {
    font-size: ${(props) => props.theme.sizes.txxl};
    font-weight: ${(props) => props.theme.weights.md};
    margin-top: -3px;
  }
`;
