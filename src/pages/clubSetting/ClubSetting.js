import { Outlet } from "react-router-dom";
import PageSelector from "../../components/global/PageSelector";
import { temp_club_setting_page } from "../../consts/tempData";
import Layout from "../../layouts/Layout";
import styled from "styled-components";
import usePrevPage from "../../hooks/usePrevPage";

export default function ClubSetting() {
  const { onPrevPage } = usePrevPage();

  return (
    <Layout headerCenter="Import" headerLeft="prev" onClickLeft={onPrevPage}>
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
