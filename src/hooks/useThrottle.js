import { useEffect, useRef } from "react";

export default function useThrottle(callback, time) {
  const isWaiting = useRef(false);

  return (...args) => {
    if (isWaiting.current) return;

    callback.apply(this, args);
    isWaiting.current = true;

    setTimeout(() => {
      isWaiting.current = false;
    }, time);
  };
}
