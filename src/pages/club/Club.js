import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import PageSelector from "../../components/global/PageSelector";
import usePrevPage from "../../hooks/usePrevPage";
import Layout from "../../layouts/Layout";
import { useState } from "react";
import ClubSettingDropDown from "../../components/club/ClubSettingDropDow";
import { modifyClubPageSelector } from "../../consts/pageData";

export default function Club() {
  const { onPrevPage } = usePrevPage();
  const [isSettingExpanded, setIsSettingExpanded] = useState(false);
  const { clubId } = useParams();

  const onClickSettingButton = () => {
    setIsSettingExpanded((prev) => !prev);
  };

  const clubPageSelector = modifyClubPageSelector(clubId);

  return (
    <Layout
      headerLeft="prev"
      headerCenter="Import"
      headerRight="edit"
      onClickLeft={onPrevPage}
      onClickRight={onClickSettingButton}
    >
      {isSettingExpanded && <ClubSettingDropDown />}
      <PageSelector pages={clubPageSelector} />

      <OutletBox>
        <Outlet />
      </OutletBox>
    </Layout>
  );
}

const OutletBox = styled.div`
  margin-top: ${(props) => props.theme.global.pageselector.height};
`;
