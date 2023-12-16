import { FaPen } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PageSelector from "../components/global/PageSelector";
import UserProfile from "../components/user/UserProfile";
import { temp_profile_pageselector, temp_user_profile } from "../consts/tempData";
import Layout from "../layouts/Layout";

export default function Profile() {
  return (
    <Layout headerLeft={"prev"} headerRight={"setting"}>
      <UserProfile user={temp_user_profile} childrenBottom={"55px"}>
        <FaPen size={20} />
      </UserProfile>

      <PageSelector pages={temp_profile_pageselector} top={"22vh"} />

      <OutletLayout>
        <Outlet />
      </OutletLayout>
    </Layout>
  );
}

const OutletLayout = styled.div`
  margin-top: calc(${(props) => props.theme.global.pageselector.height} + 18vh);
`;
