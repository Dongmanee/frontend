import { useCallback } from "react";
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

export const modifyClubPageSelector = (clubId) => {
  return [
    {
      name: "홈",
      src: `/club/${clubId}`,
    },
    {
      name: "게시판",
      src: `/club/${clubId}/posts`,
    },
    {
      name: "일정",
      src: `/club/${clubId}/schedule`,
    },
    {
      name: "사진첩",
      src: `/club/${clubId}/album`,
    },
  ];
};

export const profile_pageselector = [
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

export const modifyUserPageSelector = (userId) => {
  return [
    // user정보를 redux로 상태관리 해야할 듯!
    {
      name: "가입 동아리",
      src: `/user/${userId}`,
    },
    {
      name: "작성한 글",
      src: `/user/${userId}/posts`,
    },
    {
      name: "작성한 댓글",
      src: `/user/${userId}/comments`,
    },
  ];
};

export const modifyClubSettingPageSelector = (clubId) => {
  return [
    {
      name: "신청내역",
      src: `/club/${clubId}/setting/applications`,
    },
    {
      name: "문의내역",
      src: `/club/${clubId}/setting/inquiries`,
    },
    {
      name: "멤버관리",
      src: `/club/${clubId}/setting/members`,
    },
  ];
};
