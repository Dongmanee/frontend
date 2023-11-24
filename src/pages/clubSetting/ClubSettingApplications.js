import styled from "styled-components";
import { temp_applications_list } from "../../consts/tempData";
import ApplicationCard from "../../components/clubSetting/applications/ApplicationCard";
import { flexColumn } from "../../styles/global.style";
import ManageApplicationButton from "../../components/clubSetting/applications/ManageApplicationButton";

export default function ClubSettingApplications() {
  return (
    <ClubSettingApplicationsLayout>
      <ManageApplicationButton />
      {temp_applications_list.map((card) => (
        <ApplicationCard applicationInfo={card} />
      ))}
    </ClubSettingApplicationsLayout>
  );
}

const ClubSettingApplicationsLayout = styled.div`
  ${flexColumn}
  gap:1rem
`;
