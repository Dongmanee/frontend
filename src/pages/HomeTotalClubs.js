import styled from "styled-components";
import Layout from "../layouts/Layout";
import ClubCategory from "../components/home/ClubCategoryList";
import CustomInput from "../components/global/CustomInputs";

export default function HomeTotalClubs() {
  return (
    <Layout headerLeft="prev">
      <HomeTotalClubsLayout>
        <ClubCategory />
        <CustomInput
          placeholder="동아리를 검색하세요"
          margin="1rem"
          border="0.05rem solid"
        />
      </HomeTotalClubsLayout>
    </Layout>
  );
}

const HomeTotalClubsLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
