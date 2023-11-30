import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PageSelector from "../../components/global/PageSelector";
import { temp_club_pageselector } from "../../consts/tempData";
import usePrevPage from "../../hooks/usePrevPage";
import Layout from "../../layouts/Layout";

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
