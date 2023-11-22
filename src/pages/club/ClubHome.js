import ClubInfo from "../../components/club/ClubInfo";
import Clubpage from "../../components/club/Clubpage";
import { temp_club_pages } from "../../consts/tempData";
import ClubJoinButton from "../../components/club/ClubJoinButton";
import { useNavigate } from "react-router-dom";

export default function ClubHome() {
  const nav = useNavigate();
  const onMoreClick = (src) => {
    nav(`${src}`);
  };
  return (
    <>
      <ClubInfo />

      {temp_club_pages.map((item, idx) => (
        <Clubpage
          key={idx}
          title={item.title}
          isMore={item.isMore}
          moreright={item.moreright}
          moreleft={item.moreleft}
          morebottom={item.morebottom}
          moretop={item.moretop}
          moreOnClick={() => onMoreClick(item.src)}
        >
          {item.item}
        </Clubpage>
      ))}

      <ClubJoinButton deadline="11 / 3 오후 3:00" />
    </>
  );
}
