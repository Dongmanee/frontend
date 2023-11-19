import styled from "styled-components";
import ClubCategory from "./ClubCategoryList";
import RegisterLabel from "../../global/register/RegisterLabel";
import { temp_clubs_catgory } from "../../../consts/tempData";
import ProfileAndName from "../../global/ProfileAndName";
import RegisterErrorMsg from "../../global/register/RegisterErrorMsg";
import HorizontalSlider from "../../global/HorizontalSlider";

export default function RegisterClubCategory({ errorMsg }) {
  return (
    <RegisterClubCategoryLayout>
      <RegisterLabel label="카테고리를 선택해주세요" isRequired={true} />
      <HorizontalSlider>
        {temp_clubs_catgory.map((item, idx) => (
          <ProfileAndName
            key={idx}
            img={item.img}
            name={item.name}
            isIcon={true}
          />
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
