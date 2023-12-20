import styled from "styled-components";
import { MessageCSS } from "./ChatReceived";

export default function ChatSent() {
  return (
    <ChatSentLayout>
      <ChatMessageBox>
        <div>오후 3:04</div>
        <ChatMessage>김치찌개 먹을래?</ChatMessage>
      </ChatMessageBox>
    </ChatSentLayout>
  );
}

const ChatSentLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ChatMessageBox = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  margin: 10px 0;

  & > div:first-child {
    font-size: ${(props) => props.theme.sizes.xxs};
    color: ${(props) => props.theme.colors.gray.xs};
  }
`;

const ChatMessage = styled.div`
  ${MessageCSS};
  background-color: #3f3e3e;
  color: white;
`;
