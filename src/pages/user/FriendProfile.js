import { IoChatbubbleSharp } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "../../components/global/CustomButton";
import PageSelector from "../../components/global/PageSelector";
import UserProfile from "../../components/user/UserProfile";
import { temp_user_pageselector, temp_user_profile } from "../../consts/tempData";
import usePrevPage from "../../hooks/usePrevPage";
import Layout from "../../layouts/Layout";

export default function FriendProfile() {
  const { onPrevPage } = usePrevPage();
  const isAddedFriend = true;
  return (
    <Layout headerLeft={"prev"} headerRight={"edit"} onClickLeft={onPrevPage}>
      <UserProfile user={temp_user_profile} isAddedFriend={isAddedFriend}>
        <CustomButton
          width="5rem"
          height={"30px"}
          bgColor={(props) => props.theme.colors.dark.sm}
          color={"white"}
          size={(props) => props.theme.sizes.xxs}
          radius={"0.5rem"}
        >
          {isAddedFriend && <IoChatbubbleSharp size={15} />}
          {isAddedFriend ? "1:1채팅" : "친구요청"}
        </CustomButton>
      </UserProfile>
      <PageSelector pages={temp_user_pageselector} top={"22vh"} />

      <OutletBox>
        <Outlet />
      </OutletBox>
    </Layout>
  );
}

const OutletBox = styled.div`
  margin-top: 22vh;
  width: 100%;
  height: 70vh;
`;
