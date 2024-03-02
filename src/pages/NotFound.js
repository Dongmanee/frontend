import styled from "styled-components";
import { flexCenter } from "../assets/styles/global.style";
import { useRouteError } from "react-router-dom";

export function NotFound() {
  const error = useRouteError();
  return (
    <NotFoundLayout>
      <h1>Error Code - {error.status}</h1>
      <p>{error.error.message}</p>
    </NotFoundLayout>
  );
}

const NotFoundLayout = styled.div`
  height: 100vh;
  width: 100vw;

  flex-direction: column;
  ${flexCenter};
`;
