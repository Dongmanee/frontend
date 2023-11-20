import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Clubs from "../pages/Clubs";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import RegisterClub from "../pages/RegisterClub";
import Club from "../pages/club/Club";
import ClubAlbum from "../pages/club/ClubAlbum";
import ClubHome from "../pages/club/ClubHome";
import ClubPosts from "../pages/club/ClubPosts";
import ClubPostsDetail from "../pages/club/ClubPostsDetail";
import ClubSchedule from "../pages/club/ClubSchedule";
import ClubScheduleDetail from "../pages/club/ClubScheduleDetail";
import ClubUserHome from "../pages/club/ClubUserHome";
import User from "../pages/user/User";
import UserJoinClubs from "../pages/user/UserJoinClubs";

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
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/clubs",
        element: <Clubs />,
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
          {
            path: "posts",
            element: <ClubPosts />,
          },
        ],
      },

      {
        path: "/club/posts/:id",
        element: <ClubPostsDetail />,
      },

      {
        path: "/club/user",
        element: <ClubUserHome />,
        children: [
          {
            path: "",
            element: <UserJoinClubs />,
          },
        ],
      },
    ],
  },
]);

export default router;
