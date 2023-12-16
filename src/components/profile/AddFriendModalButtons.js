import CustomButton from "../global/CustomButton";

export default function AddFriendModalButtons({ isSended }) {
  return (
    <>
      {isSended ? (
        <CustomButton
          border={"1px solid black"}
          bgColor={"white"}
          color={"black"}
          size={(props) => props.theme.sizes.xxs}
          width={"60px"}
          height={"23px"}
          radius={"10px"}
        >
          요청됨
        </CustomButton>
      ) : (
        <CustomButton
          bgColor={(props) => props.theme.colors.dark.md}
          color={"white"}
          size={(props) => props.theme.sizes.xxs}
          width={"60px"}
          height={"23px"}
          radius={"10px"}
        >
          요청
        </CustomButton>
      )}
    </>
  );
}
