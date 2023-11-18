import styled from "styled-components";
import ClubCategory from "./clubs/ClubCategoryList";
import RegisterLabel from "./RegisterLabel";
import { temp_clubs_catgory } from "../../consts/tempData";
import ProfileAndName from "../global/ProfileAndName";

export default function RegisterClubCategory() {
  return (
    <RegisterClubCategoryLayout>
      <RegisterLabel label="카테고리를 선택해주세요" isRequired={true} />
      <CategorySliderBox>
        {temp_clubs_catgory.map((item, idx) => (
          <ProfileAndName
            key={idx}
            img={item.img}
            name={item.name}
            isIcon={true}
          />
        ))}
      </CategorySliderBox>
    </RegisterClubCategoryLayout>
  );
}
const RegisterClubCategoryLayout = styled.div``;

const CategorySliderBox = styled.div`
  display: flex;
  gap: 10px;
`;
