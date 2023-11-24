import styled from "styled-components";
import CustomInput from "../components/global/CustomInputs";
import ClubCategory from "../components/home/clubs/ClubCategoryList";
import ClubList from "../components/home/clubs/ClubList";
import { temp_clubs } from "../consts/tempData";
import Layout from "../layouts/Layout";
import { flexCenter, flexColumn } from "../styles/global.style";
import RegisterButton from "../components/global/register/RegisterButton";
import RegisterClubButton from "../components/home/clubs/RegisterClubButton";

export default function Clubs() {
  return (
    <Layout headerLeft="prev">
      <HomeTotalClubsLayout>
        <ClubCategory />
        <CustomInput
          placeholder="동아리를 검색하세요"
          margin="1.8rem 1rem"
          border="0.05rem solid"
        />
        <ClubList clubs={temp_clubs} />
      </HomeTotalClubsLayout>
      <RegisterClubButton />
    </Layout>
  );
}

const HomeTotalClubsLayout = styled.div`
  ${flexColumn};
  margin-bottom: 6vh;
`;
