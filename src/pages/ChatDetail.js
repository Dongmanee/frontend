import { useRef } from "react";
import { BsFillSendFill } from "react-icons/bs";
import styled from "styled-components";
import ChatReceived from "../components/chats/ChatReceived";
import ChatSent from "../components/chats/ChatSent";
import usePrevPage from "../hooks/usePrevPage";
import Layout from "../components/layouts/Layout";
import { flexCenter, flexColumn } from "../assets/styles/global.style";

export default function ChatDetail() {
  const { onPrevPage } = usePrevPage();

  const messageRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);
    messageRef.current.value = "";
  };

  return (
    <Layout headerLeft={"prev"} onClickLeft={onPrevPage} headerCenter={"정준형"}>
      <ChatDetailLayout>
        <ChatSent />
        <ChatReceived />
        <ChatSent />
        <ChatReceived />

        <ChatDate>2023년 11월 10일</ChatDate>

        <ChatStatus>전송됨</ChatStatus>
      </ChatDetailLayout>

      <ChatInputRow>
        <form onSubmit={handleSubmit}>
          <input placeholder="" ref={messageRef} />
        </form>
        <SendIcon>
          <BsFillSendFill size={20} />
        </SendIcon>
      </ChatInputRow>
    </Layout>
  );
}

const ChatDetailLayout = styled.div`
  width: 100%;
  height: 80vh;
  ${flexColumn};
  flex-direction: column-reverse;
  overflow: auto;
  box-sizing: border-box;
  padding: 20px 10px;
  position: relative;
`;

const ChatDate = styled.div`
  margin: 20px auto;

  font-size: ${(props) => props.theme.sizes.xs};
  color: ${(props) => props.theme.colors.gray.xs};
`;

const ChatInputRow = styled.div`
  width: 100%;
  height: 5vh;
  margin-top: 30px;
  ${flexCenter};
  position: relative;
  border: 1px solid lightgray;
  border-radius: 20px;
  background-color: lightgray;

  & > form {
    width: 90%;
  }

  & > form > input {
    background-color: inherit;
    border: none;
    height: 90%;
    width: 90%;

    &:focus {
      outline: none;
    }
  }
`;

const SendIcon = styled.div`
  position: absolute;
  cursor: pointer;
  right: 20px;
`;

const ChatStatus = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;

  font-size: ${(props) => props.theme.sizes.xs};
`;
