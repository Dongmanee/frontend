import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/global/Navbar";
import User from "../components/global/User";
import { temp_user_profile } from "../consts/tempData";
import Layout from "../layouts/Layout";
import { flexCenter, flexColumn, flexICenter } from "../styles/global.style";
import Chat from "../components/chats/Chat";

export default function Chats() {
  const navigate = useNavigate();
  const isNewChat = true ? "black" : "inherit";

  return (
    <Layout
      headerLeft={"prev"}
      headerRight={"setting"}
      onClickLeft={() => navigate(-1)}
      onClickRight={() => navigate("/profile/setting")}
    >
      <ChatsCol>
        <Chat isNewChat={isNewChat} />
        <Chat />
        <Chat />
      </ChatsCol>
      <Navbar />
    </Layout>
  );
}

const ChatsCol = styled.div`
  ${flexColumn};
  margin-top: 20px;
`;
