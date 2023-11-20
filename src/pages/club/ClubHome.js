import ClubInfo from "../../components/club/ClubInfo";
import ClubPage from "../../components/club/ClubPage";
import { temp_club_pages } from "../../consts/tempData";
import ClubJoinButton from "../../components/club/ClubJoinButton";

export default function ClubHome() {
  return (
    <>
      <ClubInfo />

      {temp_club_pages.map((item, idx) => (
        <ClubPage key={idx} title={item.title}>
          {item.item}
        </ClubPage>
      ))}

      <ClubJoinButton deadline="11 / 3 오후 3:00" />
    </>
  );
}
