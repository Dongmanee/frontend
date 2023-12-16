import { BsFillSendFill } from "react-icons/bs";
import styled from "styled-components";
import ChatFrom from "../components/chats/ChatFrom";
import ChatTo from "../components/chats/ChatTo";
import usePrevPage from "../hooks/usePrevPage";
import Layout from "../layouts/Layout";
import { flexCenter, flexColumn } from "../styles/global.style";

export default function ChatDetail() {
  const { onPrevPage } = usePrevPage();
  return (
    <Layout headerLeft={"prev"} onClickLeft={onPrevPage} headerCenter={"정준형"}>
      <ChatDetailLayout>
        <ChatTo />
        <ChatFrom />
        <ChatTo />
        <ChatFrom />

        <ChatDate>2023년 11월 10일</ChatDate>

        <ChatStatus>전송됨</ChatStatus>
      </ChatDetailLayout>

      <ChatInputRow>
        <input placeholder="" />
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

  & > input {
    background-color: inherit;
    border: none;
    height: 90%;
    width: 70%;
    margin-left: -20px;

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
