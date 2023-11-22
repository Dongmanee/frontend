import styled from "styled-components";
import { flexCenter, flexColumn, flexICenter } from "../../../styles/global.style";
import CustomButton from "../../global/CustomButton";
import { FaCheck } from "react-icons/fa";

export default function ClubScheduleItemContent({ item, isDetail }) {
  const leftPop = item.totalPop - item.pop;

  return (
    <ClubScheduleItemContentLayout $isDetail={isDetail}>
      <TitleCol $isDetail={isDetail}>
        <span>일시</span>
        <span>위치</span>
        <span>비용</span>
        {isDetail && <span>내용</span>}
        <span>참석</span>
      </TitleCol>

      <TextCol $isDetail={isDetail}>
        <span>{item.date}</span>
        <span>{item.location}</span>
        <span>{item.cost}</span>
        {isDetail && <span>{item.detail}</span>}
        <span>
          <p>{item.pop}/</p>
          <p>{item.totalPop}</p>
          <p>({leftPop}자리 남음)</p>
          {isDetail && (
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
          )}
        </span>
      </TextCol>
    </ClubScheduleItemContentLayout>
  );
}

const ClubScheduleItemContentLayout = styled.div`
  height: ${(props) => props.$isDetail && "25vh"};
  display: flex;
  margin-top: ${(props) => props.$isDetail && "30px"};
`;

const TitleCol = styled.div`
  width: ${(props) => (props.$isDetail ? "20%" : "10%")};
  height: ${(props) => (props.$isDetail ? "100%" : "50%")};
  ${flexColumn};
  gap: ${(props) => (props.$isDetail ? "20px" : "8px")};

  & > span {
    font-size: ${(props) =>
      props.$isDetail ? props.theme.sizes.md : props.theme.sizes.xs};
    color: ${(props) => props.theme.colors.gray.md};
    white-space: nowrap;
  }
`;

const TextCol = styled.div`
  width: ${(props) => (props.$isDetail ? "80%" : "90%")};
  height: ${(props) => (props.$isDetail ? "100%" : "50%")};
  ${flexColumn};
  gap: ${(props) => (props.$isDetail ? "20px" : "8px")};

  & > span {
    font-size: ${(props) =>
      props.$isDetail ? props.theme.sizes.md : props.theme.sizes.xs};
  }

  & > span:last-child {
    display: flex;
    gap: ${(props) => props.$isDetail && "5px"};

    & > p:first-child {
      color: ${(props) => props.theme.colors.red.md};
    }

    & > p:last-child {
      color: ${(props) => props.theme.colors.gray.md};
      margin-left: 3px;
    }
  }
`;
