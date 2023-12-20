import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Chat from "../components/chats/Chat";
import Navbar from "../components/global/Navbar";
import { temp_chat_lists } from "../consts/tempData";
import Layout from "../layouts/Layout";
import { flexColumn } from "../styles/global.style";
import React, { useState } from "react";

export default function Chats() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Layout
      headerLeft={"prev"}
      headerRight={"setting"}
      onClickLeft={() => navigate(-1)}
      onClickRight={() => navigate("/profile/setting")}
    >
      <ChatsCol>
        {temp_chat_lists.map((user, idx) => (
          <Chat
            key={idx}
            user={user}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
          />
        ))}
      </ChatsCol>
      <Navbar />
    </Layout>
  );
}

const ChatsCol = styled.div`
  ${flexColumn};
  margin-top: 20px;
`;
