import styled from "styled-components";
import { temp_friends } from "../../consts/tempData";
import { flexCenter, flexColumn, flexICenter } from "../../styles/global.style";
import CustomInput from "../global/CustomInputs";
import { BsPersonPlus } from "react-icons/bs";
import User from "../global/User";

export default function Friends() {
  return (
    <>
      <FriendSearchInputRow>
        <CustomInput placeholder={"검색"} />
        <BsPersonPlus size={20} />
      </FriendSearchInputRow>

      <FriendsCol>
        {temp_friends.map((item, idx) => (
          <User user={item} key={idx} />
        ))}
      </FriendsCol>
    </>
  );
}

const FriendSearchInputRow = styled.div`
  ${flexICenter};
  justify-content: space-around;

  & > input {
    width: 70%;
    height: 30px;
  }
`;

const FriendsCol = styled.div`
  ${flexColumn};
  padding: 30px 7%;
  gap: 15px;
`;
