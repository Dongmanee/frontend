import styled from "styled-components";
import { useState } from "react";

//아직 수정 중인 컴포넌트
export default function HorizontalSlider({ children }) {
  const [touchX, setTouchX] = useState(0);

  function onTouchStart(e) {
    setTouchX(e.changedTouches[0].pageX);
  }

  function onTouchEnd(e) {
    const distanceX = touchX - e.changedTouches[0].pageX;
    const targetUl = e.target.closest("ul");
    // const targetUlWidth = targetUl.offsetWidth / 2;
    const newLeft = Math.abs(parseFloat(targetUl.style.left)) + distanceX;

    if (newLeft < 0) {
      targetUl.style.left = "0px";
    } else {
      targetUl.style.left = `-${newLeft}px`;
    }
  }

  return (
    <HorizontalSliderLayout
      style={{ left: "0" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </HorizontalSliderLayout>
  );
}

const HorizontalSliderLayout = styled.ul`
  width: 100%;
  overflow: scroll;
  display: flex;
  gap: 20px;
  padding: 0.5rem 0;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
