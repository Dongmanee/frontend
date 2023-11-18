import styled from "styled-components";
import total from "../../../images/club-category/total.png";
import computer from "../../../images/club-category/computer.png";
import ProfileAndName from "../../global/ProfileAndName";

const temp_catgory = [
  { name: "전체", img: total },
  { name: "코딩", img: computer },
  { name: "코딩", img: computer },
  { name: "코딩", img: computer },
  { name: "코딩", img: computer },
  { name: "코딩", img: computer },
  { name: "코딩", img: computer },
  { name: "코딩", img: computer },
];

export default function ClubCategory({ isSlider }) {
  return (
    <ClubCategoryLayout>
      {isSlider ? (
        <CategorySliderBox>
          {temp_catgory.map((item, idx) => (
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
          {temp_catgory.map((item, idx) => (
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
