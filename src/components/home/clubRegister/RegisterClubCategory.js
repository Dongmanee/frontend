import styled from "styled-components";
import ClubCategory from "../clubs/ClubCategoryList";
import RegisterLabel from "../../global/register/RegisterLabel";
import { temp_clubs_catgory } from "../../../consts/tempData";
import ProfileAndName from "../../global/ProfileAndName";
import RegisterErrorMsg from "../../global/register/RegisterErrorMsg";
import HorizontalSlider from "../../global/HorizontalSlider";
import CategoryIcon from "../../global/CategoryIcon";

export default function RegisterClubCategory({ errorMsg }) {
  return (
    <RegisterClubCategoryLayout>
      <RegisterLabel label="동아리 카테고리" isRequired={true} />
      <HorizontalSlider>
        {temp_clubs_catgory.map((item, idx) => (
          <CategoryIcon key={idx} img={item.img} name={item.name} />
        ))}
      </HorizontalSlider>
      {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
    </RegisterClubCategoryLayout>
  );
}
const RegisterClubCategoryLayout = styled.div``;

const CategorySliderBox = styled.div`
  display: flex;
  gap: 20px;
  padding: 0.5rem 0;
`;
