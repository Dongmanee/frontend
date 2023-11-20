import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PageSelector from "../../components/global/PageSelector";
import { temp_user_pageselector } from "../../consts/tempData";
import Layout from "../../layouts/Layout";

export default function User({ profile }) {
  return (
    <Layout headerLeft={"prev"} headerRight={"edit"}>
      {profile}
      <PageSelector pages={temp_user_pageselector} top={"21vh"} />

      <ViewBox>
        <Outlet />
      </ViewBox>
    </Layout>
  );
}

const ViewBox = styled.div`
  margin-top: 22vh;
  width: 100%;
  height: 70vh;
`;
