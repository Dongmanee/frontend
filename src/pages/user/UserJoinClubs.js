import ClubList from "../../components/home/clubs/ClubList";
import { temp_clubs } from "../../consts/tempData";

export default function UserJoinClubs() {
  return (
    <>
      <ClubList clubs={temp_clubs} />
    </>
  );
}
