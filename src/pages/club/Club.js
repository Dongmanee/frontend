import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import PageSelector from "../../components/global/PageSelector";
import usePrevPage from "../../hooks/usePrevPage";
import { useState } from "react";
import ClubSettingDropDown from "../../components/club/ClubSettingDropDow";
import { modifyClubPageSelector } from "../../consts/pageData";
import Layout from "../../components/layouts/Layout";
export default function Club() {
  const navigate = useNavigate();
  const { onPrevPage } = usePrevPage();
  const [isSettingExpanded, setIsSettingExpanded] = useState(false);
  const [clubName, setClubName] = useState("Import");
  const { clubId } = useParams();

  const onClickSettingButton = () => {
    setIsSettingExpanded((prev) => !prev);
  };

  const clubPageSelector = modifyClubPageSelector(clubId);

  const handleLogoClick = () => {
    navigate(`/club/${clubId}`);
  };

  return (
    <Layout
      headerLeft="prev"
      headerCenter={clubName}
      headerRight="edit"
      onClickLeft={onPrevPage}
      onClickRight={onClickSettingButton}
      onClickCenter={handleLogoClick}
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
