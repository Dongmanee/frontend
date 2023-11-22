import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Clubs from "../pages/Clubs";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import RegisterClub from "../pages/RegisterClub";
import Signup from "../pages/Signup";
import Club from "../pages/club/Club";
import ClubAlbum from "../pages/club/ClubAlbum";
import ClubHome from "../pages/club/ClubHome";
import ClubPosts from "../pages/club/ClubPosts";
import ClubPostsDetail from "../pages/club/ClubPostsDetail";
import ClubPostsEdit from "../pages/club/ClubPostsEdit";
import ClubSchedule from "../pages/club/ClubSchedule";
import ClubScheduleAdd from "../pages/club/ClubScheduleAdd";
import ClubScheduleDetail from "../pages/club/ClubScheduleDetail";
import ClubUserHome from "../pages/club/ClubUserHome";
import ClubSetting from "../pages/clubSetting/ClubSetting";
import ClubSettingApplications from "../pages/clubSetting/ClubSettingApplications";
import ClubSettingInquiries from "../pages/clubSetting/ClubSettingInquiries";
import ClubSettingMembers from "../pages/clubSetting/ClubSettingMembers";
import ClubSettingInquiryDetail from "../pages/clubSetting/ClubSettingInquiryDetail";
import ClubSettingApplicationDetail from "../pages/clubSetting/ClubSettingApplicationDetail";
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
        path: "/signup",
        element: <Signup />,
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
            path: "/club/",
            element: <Navigate to={"home"} />,
          },
          {
            path: "home",
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
        path: "/club/schedule/add",
        element: <ClubScheduleAdd />,
      },

      {
        path: "/club/posts/:id",
        element: <ClubPostsDetail />,
      },
      {
        path: "/club/posts/add",
        element: <ClubPostsEdit />,
      },
      {
        path: "club/posts/edit/:id",
        element: <ClubPostsEdit />,
      },

      {
        path: "/user/:id",
        element: <ClubUserHome />,
        children: [
          {
            path: "",
            element: <UserJoinClubs />,
          },
        ],
      },
      {
        path: "/club/setting",
        element: <ClubSetting />,
        children: [
          {
            path: "applications",
            element: <ClubSettingApplications />,
          },
          {
            path: "inquiries",
            element: <ClubSettingInquiries />,
          },
          {
            path: "members",
            element: <ClubSettingMembers />,
          },
        ],
      },
      {
        path: "/club/setting/inquiries/:inquiryId",
        element: <ClubSettingInquiryDetail />,
      },
      {
        path: "/club/setting/applications/:applicationId",
        element: <ClubSettingApplicationDetail />,
      },
    ],
  },
]);

export default router;
