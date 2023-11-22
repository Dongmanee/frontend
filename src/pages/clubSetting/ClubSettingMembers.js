import styled from "styled-components";
import { flexColumn } from "../../styles/global.style";
import { temp_club_user } from "../../consts/tempData";
import MemberCard from "../../components/clubSetting/members/MemberCard";

export default function ClubSettingMembers() {
  return (
    <ClubSettingMembersLayout>
      {temp_club_user.map((user, idx) => (
        <MemberCard key={idx} userInfo={user} isSetting={true} />
      ))}
    </ClubSettingMembersLayout>
  );
}

const ClubSettingMembersLayout = styled.div`
  ${flexColumn}
  gap: 1rem
`;
