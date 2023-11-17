import styled from "styled-components";
import HomeLayout from "../layouts/HomeLayout";
import ClubCategory from "../components/home/ClubCategoryList";

export default function HomeTotalClubs() {
  return (
    <HomeLayout headerLeft="logo">
      <ClubCategory />
    </HomeLayout>
  );
}
