import styled, { css, keyframes } from "styled-components";
import { BOTTOM_SHEET_HEIGHT } from "../../consts/consts";
import { useBottomSheet } from "../../hooks/useBottomSheet";
import CalendarDetail from "./CalendarDetail";

export default function CalendarBottomSheet({ isDetailOpen, setIsDetailOpen }) {
  const { sheetRef } = useBottomSheet({
    isBottomSheetOpen: isDetailOpen,
    setIsBottomSheetOpen: setIsDetailOpen,
  });

  return (
    <CalendarBottomSheetLayout ref={sheetRef} $isDetailOpen={isDetailOpen}>
      <BottomSheetHeaderLayout>
        <BottomSheetHeader />
      </BottomSheetHeaderLayout>
      <CalendarDetail />
    </CalendarBottomSheetLayout>
  );
}

const appearBottomSheet = keyframes`
  0%{
    transform: translateY(50%);
  }
  100%{
    transform: translateY(0%);
  }
`;

const CalendarBottomSheetLayout = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  z-index: 1;
  top: calc(100% - 350px);
  left: 0;
  right: 0;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: ${BOTTOM_SHEET_HEIGHT}px;
  box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25);

  background: lightgray;

  ${(props) => {
    return (
      props.$isDetailOpen &&
      css`
        animation: ${appearBottomSheet} 0.2s ease;
      `
    );
  }}
  transition: transform 150ms ease-out;
`;

const BottomSheetHeaderLayout = styled.div`
  height: 48px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 4px;
`;

const BottomSheetHeader = styled.div`
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: gray;
  margin: auto;
`;
