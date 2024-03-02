import Navbar from "../components/global/Navbar";
import PageSelector from "../components/global/PageSelector";
import UserProfile from "../components/user/Profile";
import { profile_pageselector } from "../consts/pageData";
import Layout from "../components/layouts/Layout";
import { useUserStore } from "../store/user.store";

import { FaPen } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Profile() {
  const navigate = useNavigate();
  const userStore = useUserStore();

  const user = {
    name: userStore.getName(),
    intro: userStore.getIntroduce(),
  };

  return (
    <Layout
      headerLeft={"profile"}
      headerRight={"setting"}
      onClickRight={() => navigate("setting")}
    >
      <UserProfile user={user} isMyProfile={true}>
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
