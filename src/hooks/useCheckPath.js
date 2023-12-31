import { useLocation } from "react-router-dom";

export default function useCheckPath(path) {
  const location = useLocation();
  const isCheckedPath = !location.pathname.endsWith(path);

  return { isCheckedPath };
}
