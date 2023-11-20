import ClubUserProfile from "../../components/club/ClubUserProfile";
import User from "../user/User";

export default function ClubUserHome() {
  return <User profile={<ClubUserProfile />} />;
}
