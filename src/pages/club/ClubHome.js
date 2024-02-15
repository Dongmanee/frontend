import { useNavigate, useParams } from "react-router-dom";
import ClubInfo from "../../components/club/ClubInfo";
import ClubJoinButton from "../../components/club/ClubJoinButton";
import ClubUserList from "../../components/club/ClubUserList";
import ClubPage from "../../components/club/Clubpage";
import ClubPost from "../../components/club/posts/ClubPost";
import {
  temp_club_home_info,
  temp_club_post,
  temp_club_posts,
  temp_club_users,
} from "../../consts/tempData";
import ClubAlbum from "./ClubAlbum";
import ClubSchedule from "./ClubSchedule";
import { useState } from "react";

export default function ClubHome() {
  const nav = useNavigate();
  const clubHomeInfo = temp_club_home_info;
  const handlemoreClick = (src) => {
    nav(`${src}`);
  };
  const { univId: isOtherUniv } = useParams();
  const [clubHomePost, setClubHomePost] = useState(temp_club_post);
  const [clubUsers, setClubUsers] = useState(temp_club_users);

  return (
    <>
      <ClubInfo clubHomeInfo={clubHomeInfo} />

      <ClubPage
        title="공지사항"
        isMore={true}
        moreOnClick={() => handlemoreClick("posts?category=notice")}
      >
        <ClubPost post={clubHomePost} isClubHome={true} />
      </ClubPage>
      <ClubPage
        title="일정"
        isMore={true}
        moreOnClick={() => handlemoreClick("schedule")}
      >
        <ClubSchedule />
      </ClubPage>
      <ClubPage
        title="사진첩"
        isMore={true}
        moreOnClick={() => handlemoreClick("album")}
      >
        <ClubAlbum />
      </ClubPage>
      <ClubPage title="모임멤버" isMemberNum={clubUsers.length}>
        <ClubUserList users={clubUsers} />
      </ClubPage>

      {!isOtherUniv && (
        <ClubJoinButton clubJoinAvailable={clubHomeInfo.isClubJoinAvailable} />
      )}
    </>
  );
}
