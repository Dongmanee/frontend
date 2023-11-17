import styled from "styled-components";
import HomeLayout from "../layouts/HomeLayout";
import ClubCategory from "../components/home/ClubCategoryList";
import CustomInput from "../components/global/CustomInputs";
import { flexCenter } from "../styles/global.style";

export default function HomeTotalClubs() {
  return (
    <HomeLayout headerLeft="logo">
      <HomeTotalClubsLayout>
        <ClubCategory />
        <CustomInput
          placeholder="동아리를 검색하세요"
          margin="1rem"
          border="0.05rem solid"
        />
      </HomeTotalClubsLayout>
    </HomeLayout>
  );
}

const HomeTotalClubsLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
