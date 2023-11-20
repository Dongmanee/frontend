import CustomButton from "../global/CustomButton";
import UserProfile from "../user/UserProfile";

export default function ClubUserProfile() {
  const temp_user = {
    name: "정준형",
    intro: "안녕하세요~!!",
  };
  return (
    <UserProfile user={temp_user}>
      <CustomButton
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
