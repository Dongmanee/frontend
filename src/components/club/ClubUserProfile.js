import { temp_user_profile } from "../../consts/tempData";
import CustomButton from "../global/CustomButton";
import UserProfile from "../user/UserProfile";

export default function ClubUserProfile() {
  return (
    <UserProfile user={temp_user_profile}>
      <CustomButton
        width="5rem"
        height={"30px"}
        bgColor={(props) => props.theme.colors.dark.sm}
        color={"white"}
        size={(props) => props.theme.sizes.xxs}
        radius={"0.5rem"}
      >
        친구요청
      </CustomButton>
    </UserProfile>
  );
}
