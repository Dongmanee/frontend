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
