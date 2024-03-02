import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Chat from "../components/chats/Chat";
import Navbar from "../components/global/Navbar";
import { temp_chat_lists } from "../consts/tempData";
import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import { flexColumn } from "../assets/styles/global.style";
export default function Chats() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Layout headerLeft="chat">
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
`;
