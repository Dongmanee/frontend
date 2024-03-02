import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserComments from "../components/profile/Comments";
import UserProfileEdit from "../components/profile/Edit";
import Friends from "../components/profile/Friends";
import UserJoinClub from "../components/profile/JoinClub";
import UserPosts from "../components/profile/Posts";
import Calendar from "../pages/Calendar";
import ChatDetail from "../pages/ChatDetail";
import Chats from "../pages/Chats";
import Clubs from "../pages/Clubs";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Profile from "../pages/Profile";
import RegisterClub from "../pages/RegisterClub";
import Signup from "../pages/Signup";
import Univs from "../pages/Univs";
import Club from "../pages/club/Club";
import ClubAlbum from "../pages/club/ClubAlbum";
import ClubHome from "../pages/club/ClubHome";
import ClubPosts from "../pages/club/ClubPosts";
import ClubPostsDetail from "../pages/club/ClubPostsDetail";
import ClubPostsEdit from "../pages/club/ClubPostsEdit";
import ClubSchedule from "../pages/club/ClubSchedule";
import ClubScheduleAdd from "../pages/club/ClubScheduleAdd";
import ClubScheduleDetail from "../pages/club/ClubScheduleDetail";
import InquiryClub from "../pages/club/InquiryClub";
import JoinClub from "../pages/club/JoinClub";
import ClubSetting from "../pages/clubSetting/ClubSetting";
import ClubSettingApplicationDetail from "../pages/clubSetting/ClubSettingApplicationDetail";
import ClubSettingApplicationManagement from "../pages/clubSetting/ClubSettingApplicationManagement";
import ClubSettingApplications from "../pages/clubSetting/ClubSettingApplications";
import ClubSettingInquiries from "../pages/clubSetting/ClubSettingInquiries";
import ClubSettingInquiryDetail from "../pages/clubSetting/ClubSettingInquiryDetail";
import ClubSettingMembers from "../pages/clubSetting/ClubSettingMembers";
import FriendProfile from "../pages/user/FriendProfile";
import Setting from "../pages/user/Setting";
import UserJoinClubs from "../pages/user/UserJoinClubs";
import { NotFound } from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Clubs />,
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
        path: "/club/:clubId/register/edit",
        element: <RegisterClub />,
      },
      //동아리
      {
        path: "/club/:clubId",
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
            path: "schedule/:scheduleId",
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
        path: "/club/:clubId/posts/:postId",
        element: <ClubPostsDetail />,
      },
      {
        path: "club/:clubId/posts/edit/:postId",
        element: <ClubPostsEdit />,
      },
      {
        path: "/club/:clubId/posts/add",
        element: <ClubPostsEdit />,
      },
      {
        path: "/club/:clubId/schedule/add",
        element: <ClubScheduleAdd />,
      },
      {
        path: "/club/:clubId/join",
        element: <JoinClub />,
      },
      {
        path: "/club/:clubId/inquiry",
        element: <InquiryClub />,
      },
      //동아리 친구 프로필
      {
        path: "/user/:userId",
        element: <FriendProfile />,
        children: [
          {
            path: "",
            element: <UserJoinClubs />,
          },
        ],
      },
      //동아리 설정
      {
        path: "/club/:clubId/setting",
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
        path: "/club/:clubId/setting/edit",
        element: <RegisterClub />,
      },
      {
        path: "/club/:clubId/setting/inquiries/:inquiryId",
        element: <ClubSettingInquiryDetail />,
      },
      {
        path: "/club/:clubId/setting/applications/:applicationId",
        element: <ClubSettingApplicationDetail />,
      },
      {
        path: "/club/:clubId/setting/applications/management",
        element: <ClubSettingApplicationManagement />,
      },

      //채팅
      {
        path: "/chats",
        element: <Chats />,
      },
      {
        path: "/chats/detail/:Id",
        element: <ChatDetail />,
      },
      //캘린더
      {
        path: "/calendar",
        element: <Calendar />,
      },
      //내 프로필
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "",
            element: <Friends />,
          },
          {
            path: "joinclub",
            element: <UserJoinClub />,
          },
          {
            path: "posts",
            element: <UserPosts />,
          },
          {
            path: "comments",
            element: <UserComments />,
          },
        ],
      },
      {
        path: "profile/edit",
        element: <UserProfileEdit />,
      },
      {
        path: "profile/setting",
        element: <Setting />,
      },
      //다른 학교 조회
      {
        path: "/univs",
        element: <Univs />,
      },
      {
        path: "/univs/:univId",
        element: <Clubs />,
      },
      {
        path: "/univs/:univId/club/:clubId",
        element: <Club />,
        children: [
          {
            path: "",
            element: <ClubHome />,
          },
        ],
      },
    ],
  },
]);

export default router;
