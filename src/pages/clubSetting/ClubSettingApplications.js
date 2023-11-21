import styled from "styled-components";
import { temp_applications_list } from "../../consts/tempData";
import ApplicationCard from "../../components/clubSetting/applications/ApplicationCard";
import { flexColumn } from "../../styles/global.style";

export default function ClubSettingApplications() {
  return (
    <ClubSettingApplicationsLayout>
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
