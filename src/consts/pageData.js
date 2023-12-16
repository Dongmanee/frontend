import {
  FaCalendar,
  FaCommentDots,
  FaRegCalendar,
  FaRegCommentDots,
  FaRegUser,
  FaUser,
} from "react-icons/fa6";
import { PiHouseBold, PiHouseFill } from "react-icons/pi";

export const navbarItems = [
  {
    page: "/posts",
    active: <PiHouseFill size={26} />,
    inActive: <PiHouseBold size={26} />,
  },
  {
    page: "/chat",
    active: <FaCommentDots size={24} />,
    inActive: <FaRegCommentDots size={24} />,
  },
  {
    page: "/calendar",
    active: <FaCalendar size={24} />,
    inActive: <FaRegCalendar size={24} />,
  },
  {
    page: "/profile",
    active: <FaUser size={24} />,
    inActive: <FaRegUser size={24} />,
  },
];

export const temp_club_pageselector = [
  {
    name: "홈",
    src: "/club/:id/home",
  },
  {
    name: "게시판",
    src: "/club/:id/posts",
  },
  {
    name: "일정",
    src: "/club/:id/schedule",
  },
  {
    name: "사진첩",
    src: "/club/:id/album",
  },
];

export const temp_profile_pageselector = [
  {
    name: "친구",
    src: "/profile",
  },
  {
    name: "가입 동아리",
    src: "/profile/joinclub",
  },
  {
    name: "작성한 글",
    src: "/profile/posts",
  },
  {
    name: "작성한 댓글",
    src: "/profile/comments",
  },
];

export const temp_user_pageselector = [
  // user정보를 redux로 상태관리 해야할 듯!
  {
    name: "가입 동아리",
    src: "/user/home",
  },
  {
    name: "작성한 글",
    src: "/user/posts",
  },
  {
    name: "작성한 댓글",
    src: "/user/comments",
  },
];

export const temp_club_setting_page = [
  {
    name: "신청내역",
    src: "/club/:clubId/setting/applications",
  },
  {
    name: "문의내역",
    src: "/club/:clubId/setting/inquiries",
  },
  {
    name: "멤버관리",
    src: "/club/:clubId/setting/members",
  },
];
