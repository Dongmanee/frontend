import { Outlet } from "react-router-dom";
import PageSelector from "../../components/global/PageSelector";
import { temp_club_setting_page } from "../../consts/tempData";
import Layout from "../../layouts/Layout";
import styled from "styled-components";

export default function ClubSetting() {
  return (
    <Layout headerCenter="Import">
      <PageSelector pages={temp_club_setting_page} />
      <OutletBox>
        <Outlet />
      </OutletBox>
    </Layout>
  );
}

const OutletBox = styled.div`
  margin-top: ${(props) => props.theme.global.pageselector.height};
  padding: 1rem;
  position: relative;
`;
