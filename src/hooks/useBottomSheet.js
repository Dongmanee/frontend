import { useEffect, useRef } from "react";
import { MAX_Y, MIN_Y } from "../consts/consts";
import { useSearchParams } from "react-router-dom";

export function useBottomSheet({ isBottomSheetOpen, setIsBottomSheetOpen }) {
  const sheetRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const metrics = useRef({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: "none",
    },
  });

  useEffect(() => {
    const handleTouchStart = (e) => {
      const { touchStart, touchMove } = metrics.current;

      touchStart.sheetY = sheetRef.current.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();

      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY === 0) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = "down";
      }

      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = "up";
      }

      const touchOffset = currentTouch.clientY - touchStart.touchY;
      let nextSheetY = touchStart.sheetY + touchOffset;

      if (nextSheetY <= MIN_Y) {
        nextSheetY = MIN_Y;
      }

      if (nextSheetY > MAX_Y) {
        nextSheetY = MAX_Y;
        setIsBottomSheetOpen(false);
        searchParams.delete("date");
        setSearchParams(searchParams);
      }

      if (sheetRef.current) {
        sheetRef.current.style.setProperty(
          "transform",
          `translateY(${nextSheetY}px)`
        );
      }
    };

    const handleTouchEnd = (e) => {
      if (sheetRef.current) {
        const { touchMove } = metrics.current;

        const currentSheetY = sheetRef.current.getBoundingClientRect().y;

        if (currentSheetY !== MIN_Y) {
          if (touchMove.movingDirection === "down") {
            sheetRef.current.style.setProperty("transform", "translateY(0)");
          }

          if (touchMove.movingDirection === "up") {
            sheetRef.current.style.setProperty(
              "transform",
              `translateY(${MIN_Y - MAX_Y}px)`
            );
          }
        }

        metrics.current = {
          touchStart: {
            sheetY: 0,
            touchY: 0,
          },
          touchMove: {
            prevTouchY: 0,
            movingDirection: "none",
          },
        };
      }
    };

    sheetRef.current.addEventListener("touchstart", handleTouchStart);
    sheetRef.current.addEventListener("touchmove", handleTouchMove);
    sheetRef.current.addEventListener("touchend", handleTouchEnd);

    return () => {
      if (sheetRef.current) {
        sheetRef.current.removeEventListener("touchstart", handleTouchStart);
        sheetRef.current.removeEventListener("touchmove", handleTouchMove);
        sheetRef.current.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  return { sheetRef };
}
