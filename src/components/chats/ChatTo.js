import styled from "styled-components";
import { MessageCSS } from "./ChatFrom";

export default function ChatTo() {
  return (
    <ChatToLayout>
      <div>오후 3:04</div>
      <ChatMessage>김치찌개 먹을래?</ChatMessage>
    </ChatToLayout>
  );
}

const ChatToLayout = styled.div`
  width: 100%;
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
`;