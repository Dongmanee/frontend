import { FaPen } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/global/Navbar";
import PageSelector from "../components/global/PageSelector";
import UserProfile from "../components/user/Profile";
import { temp_profile_pageselector, temp_user_profile } from "../consts/tempData";
import Layout from "../layouts/Layout";

export default function Profile() {
  const navigate = useNavigate();
  const handleEditOpen = () => navigate(`edit`);
  const handlePrevPage = () => navigate(-1);
  return (
    <Layout headerLeft={"prev"} headerRight={"setting"} onClickLeft={handlePrevPage}>
      <UserProfile user={temp_user_profile} isMyProfile={true}>
        <FaPen size={20} onClick={handleEditOpen} />
      </UserProfile>

      <PageSelector pages={temp_profile_pageselector} top={"22vh"} />

      <OutletLayout>
        <Outlet />
      </OutletLayout>

      <Navbar />
    </Layout>
  );
}

const OutletLayout = styled.div`
  margin-top: calc(${(props) => props.theme.global.pageselector.height} + 18vh);
`;
