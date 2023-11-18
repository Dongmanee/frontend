import styled from "styled-components";
import Layout from "../layouts/Layout";
import ClubCategory from "../components/home/clubs/ClubCategoryList";
import CustomInput from "../components/global/CustomInputs";
import ClubCard from "../components/home/clubs/ClubCard";
import ClubList from "../components/home/clubs/ClubList";
import CustomButton from "../components/global/CustomButton";

const temp_clubs = [
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
  {
    name: "Import",
    intro: "카페에서 다같이 코딩해요",
    category: "코딩",
    personnel: 35,
  },
];

export default function HomeTotalClubs() {
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
        <RegisterClubButton>동아리 등록하기</RegisterClubButton>
      </HomeTotalClubsLayout>
    </Layout>
  );
}

const HomeTotalClubsLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const RegisterClubButton = styled.button`
  height: 7vh;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.dark.sm};
  color: white;
  font-size: ${(props) => props.theme.sizes.lg};
`;
