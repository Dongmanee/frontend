import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import HomeTotalClubs from "../pages/HomeTotalClubs";
import Login from "../pages/Login";
import RegisterClub from "../pages/RegisterClub";
import Club from "../pages/club/Club";
import ClubHome from "../pages/club/ClubHome";
import ClubSchedule from "../pages/club/ClubSchedule";
import ClubScheduleDetail from "../pages/club/ClubScheduleDetail";
import ClubAlbum from "../pages/club/ClubAlbum";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    // errorElement: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/clubs",
        element: <HomeTotalClubs />,
      },
      {
        path: "/clubs/register",
        element: <RegisterClub />,
      },
      {
        path: "/club",
        element: <Club />,
        children: [
          {
            path: "",
            element: <ClubHome />,
          },
          {
            path: "schedule",
            element: <ClubSchedule />,
          },
          {
            path: "schedule/:Id",
            element: <ClubScheduleDetail />,
          },
          {
            path: "album",
            element: <ClubAlbum />,
          },
        ],
      },
    ],
  },
]);

export default router;
