import styled from "styled-components";
import { flexCenter, flexColumn, flexICenter } from "../../styles/global.style";
import User from "../global/User";
import { temp_user_profile } from "../../consts/tempData";

export default function Chat({ isNewChat }) {
  return (
    <ChatLayout>
      <User
        user={temp_user_profile}
        imgSize={"4rem"}
        size={"1.125rem"}
        introSize={"0.875rem"}
        introColor={isNewChat}
        introWeight={isNewChat && "600"}
        gap={"15px"}
      />

      <ChatTime isNewChat={isNewChat}>
        <div>오후 3: 03</div>
        {isNewChat ? <Count>3</Count> : <Hide>.</Hide>}
      </ChatTime>
    </ChatLayout>
  );
}

const ChatLayout = styled.div`
  min-height: 100px;
  ${flexICenter};
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const ChatTime = styled.div`
  ${flexColumn};
  gap: 20px;
  align-items: flex-end;
  div:first-child {
    font-size: ${(props) => props.theme.sizes.xxs};
  }
`;

const Count = styled.div`
  width: 25px;
  height: 25px;
  ${flexCenter};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.red.sm};
  color: white;
`;

const Hide = styled.div`
  color: white;
`;
