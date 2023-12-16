import styled, { keyframes } from "styled-components";
import { temp_friends } from "../../consts/tempData";
import { flexColumn, flexJBetween, fullScreen } from "../../styles/global.style";
import CustomInput from "../global/CustomInputs";
import Header from "../global/Header";
import User from "../global/User";
import AddFriendModalButtons from "./AddFriendModalButtons";

export default function AddFriendModal({ onClose }) {
  return (
    <>
      <AddFriendModalLayout>
        <Header
          left={"exit"}
          right={"check"}
          center={"친구 추가"}
          position={"relative"}
        />

        <ItemsCol>
          <CustomInput placeholder={"검색"} width={"75%"} />

          <FriendsCol>
            {temp_friends.map((item, idx) => (
              <FriendsBox key={idx}>
                <User user={item} />
                <AddFriendModalButtons isSended={item.isSended} />
              </FriendsBox>
            ))}
          </FriendsCol>
        </ItemsCol>
      </AddFriendModalLayout>

      <Overlay onClick={onClose} />
    </>
  );
}

const AddFriendModalKeyFrame = keyframes`
    from{
        transform: translateY(200px);
        opacity: 0.7;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`;

const AddFriendModalLayout = styled.div`
  width: 100%;
  height: 80vh;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 3;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: white;

  animation: ${AddFriendModalKeyFrame} 0.5s ease-in-out;
`;

const ItemsCol = styled.div`
  ${flexColumn};
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
`;

const FriendsCol = styled.div`
  width: 80%;
  ${flexColumn};
  margin-top: 40px;
  gap: 15px;
`;

const FriendsBox = styled.div`
  ${flexJBetween};
`;

const Overlay = styled.div`
  ${fullScreen};
  position: absolute;
  inset: 0;
  margin: 0 auto;
  z-index: 2;
  background-color: rgb(0, 0, 0, 0.2);
`;
