import styled from "styled-components";
import ProfileAndName from "../../global/ProfileAndName";
import { temp_clubs_catgory } from "../../../consts/tempData";

export default function ClubCategory({ isSlider }) {
  return (
    <ClubCategoryLayout>
      {isSlider ? (
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
      ) : (
        <CategoryGridBox>
          {temp_clubs_catgory.map((item, idx) => (
            <ProfileAndName
              key={idx}
              img={item.img}
              name={item.name}
              isIcon={true}
            />
          ))}
        </CategoryGridBox>
      )}
    </ClubCategoryLayout>
  );
}

const ClubCategoryLayout = styled.div`
  padding: 10px 0;
`;

const CategorySliderBox = styled.div`
  display: flex;
  gap: 10px;
`;

const CategoryGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 10px;
`;
