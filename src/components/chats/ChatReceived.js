import sample from '../../assets/images/example.png';

import styled, { css } from "styled-components";


export default function ChatReceived() {
  return (
    <ChatReceivedLayout>
      <img src={sample} alt="" width={40} height={40} />
      <ChatMessageBox>
        <ChatMessage>오늘 점심 뭐먹을래? 배고프다</ChatMessage>
        <div>오후 3:03</div>
      </ChatMessageBox>
    </ChatReceivedLayout>
  );
}

const ChatReceivedLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin: 10px 0;

  img {
    border-radius: 50%;
  }
`;

const ChatMessageBox = styled.div`
  max-width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 10px;

  & > div:last-child {
    font-size: ${(props) => props.theme.sizes.xxs};
    color: ${(props) => props.theme.colors.gray.xs};
  }
`;

export const MessageCSS = css`
  width: 50%;
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 10px;

  font-size: ${(props) => props.theme.sizes.sm};
`;

const ChatMessage = styled.div`
  ${MessageCSS}
  background-color: ${(props) => props.theme.colors.gray.xs};
`;
