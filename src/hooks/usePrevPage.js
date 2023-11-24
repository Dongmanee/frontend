import { useNavigate } from "react-router-dom";

export default function usePrevPage() {
  const navigate = useNavigate();
  const onPrevPage = () => {
    navigate(-1);
  };

  return { onPrevPage };
}
