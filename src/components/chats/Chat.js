import { useState } from "react";
import { flexCenter, flexColumn, flexICenter } from "../../assets/styles/global.style";
import User from "../global/User";
import { AiFillBell } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function Chat({ user }) {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [btnOpened, setBtnOpened] = useState(false);

  const handleDrag = (e, data) => {
    if (data.lastX < -120) {
      setPosition({ x: -200, y: 0 });
      setBtnOpened(true);
    } else {
      setPosition({ x: 0, y: 0 });
      setBtnOpened(false);
    }
  };

  const handleStop = (e, data) => {
    if (data.lastX != 0) return;
    navigate(`detail/${user.user.userId}`);
  };

  return (
    <ChatLayout>
      <Draggable
        position={position}
        onDrag={(e, data) => handleDrag(e, data)}
        onStop={(e, data) => handleStop(e, data)}
        cancel=".no-drag"
      >
        <ChatBox $open={btnOpened}>
          <ChatItemBox>
            <User
              isChat={true}
              user={user.user}
              message={user.userMessage}
              imgSize={"4rem"}
              size={"1.125rem"}
              introSize={"0.875rem"}
              introColor={user.isNewChat ? "black" : "gray"}
              introWeight={user.isNewChat && "600"}
              gap={"15px"}
            />

            <ChatTime>
              <div>{user.chatTime}</div>
              {user.isNewChat ? <Count>3</Count> : <Hide>.</Hide>}
            </ChatTime>
          </ChatItemBox>

          <ButtonRow className="no-drag">
            <ButtonBox $bgColor={"rgba(63, 62, 62, 0.7)"}>
              <AiFillBell size={30} />
            </ButtonBox>
            <ButtonBox
              onClick={(e) => {
                e.stopPropagation();
                alert("채팅방을 나가시겠습니까?");
              }}
            >
              <MdDelete size={30} />
            </ButtonBox>
          </ButtonRow>
        </ChatBox>
      </Draggable>
    </ChatLayout>
  );
}

const chatHeight = "100px";

const ChatLayout = styled.div`
  width: 100%;
  height: ${chatHeight};
  overflow: hidden;
`;

const ChatBox = styled.div`
  width: calc(100% + 300px);
  height: ${chatHeight};
  display: flex;
  gap: ${(props) => (props.$open ? "20px" : "100px")};
`;

const ChatItemBox = styled.div`
  width: calc(100% - 300px);
  height: ${chatHeight};
  ${flexICenter};
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const ButtonRow = styled.div`
  width: 180px;
  height: ${chatHeight};
  ${flexCenter};
`;

const ButtonBox = styled.div`
  width: 90px;
  height: ${chatHeight};
  ${flexCenter};
  cursor: pointer;
  background-color: ${(props) => (props.$bgColor ? props.$bgColor : "#3f3e3e")};

  color: white;
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
