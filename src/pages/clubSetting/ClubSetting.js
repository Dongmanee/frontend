import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import PageSelector from "../../components/global/PageSelector";
import { modifyClubSettingPageSelector } from "../../consts/pageData";
import usePrevPage from "../../hooks/usePrevPage";
import Layout from "../../layouts/Layout";

export default function ClubSetting() {
  const { onPrevPage } = usePrevPage();
  const { clubId } = useParams();
  const clubSettingPageSelector = modifyClubSettingPageSelector(clubId);

  return (
    <Layout headerCenter="Import" headerLeft="prev" onClickLeft={onPrevPage}>
      <PageSelector pages={clubSettingPageSelector} />
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
