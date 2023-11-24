import PageSelector from "../../components/global/PageSelector";
import Layout from "../../layouts/Layout";
import { temp_club_pageselector } from "../../consts/tempData";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import usePrevPage from "../../hooks/usePrevPage";

export default function Club() {
  const { onPrevPage } = usePrevPage();

  return (
    <Layout
      headerLeft="prev"
      headerCenter="Import"
      headerRight="edit"
      onClickLeft={onPrevPage}
    >
      <PageSelector pages={temp_club_pageselector} />

      <OutletBox>
        <Outlet />
      </OutletBox>
    </Layout>
  );
}

const OutletBox = styled.div`
  margin-top: ${(props) => props.theme.global.pageselector.height};
`;
