import { temp_clubs } from "../../consts/tempData";
import ClubList from "../home/clubs/ClubList";

export default function UserJoinClub() {
  return (
    <>
      <ClubList clubs={temp_clubs} />
    </>
  );
}
