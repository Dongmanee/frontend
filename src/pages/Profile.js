import { FaPen } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/global/Navbar";
import PageSelector from "../components/global/PageSelector";
import UserProfile from "../components/user/Profile";
import { profile_pageselector } from "../consts/pageData";
import { temp_user_profile } from "../consts/tempData";
import Layout from "../components/layouts/Layout";
export default function Profile() {
  const navigate = useNavigate();

  return (
    <Layout
      headerLeft={"prev"}
      headerRight={"setting"}
      onClickLeft={() => navigate(-1)}
      onClickRight={() => navigate("setting")}
    >
      <UserProfile user={temp_user_profile} isMyProfile={true}>
        <FaPen size={20} onClick={() => navigate("edit")} />
      </UserProfile>

      <PageSelector pages={profile_pageselector} top={"22vh"} />

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
