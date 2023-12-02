import styled from "styled-components";
import ClubCategory from "../clubs/ClubCategoryList";
import RegisterLabel from "../../global/register/RegisterLabel";
import { temp_clubs_catgory } from "../../../consts/tempData";
import ProfileAndName from "../../global/ProfileAndName";
import RegisterErrorMsg from "../../global/register/RegisterErrorMsg";
import HorizontalSlider from "../../global/HorizontalSlider";
import CategoryIcon from "../../global/CategoryIcon";
import { useController } from "react-hook-form";

export default function RegisterClubCategory({ name, control, errorMsg }) {
  const { field } = useController({ name: name, control: control });
  const { value, onChange } = field;

  const onClickCategoryIcon = (item) => {
    onChange(item.categoryId);
  };

  return (
    <RegisterClubCategoryLayout>
      <RegisterLabel label="동아리 카테고리" isRequired={true} />
      <HorizontalSlider>
        {temp_clubs_catgory.map((item, idx) => (
          <CategoryIcon
            key={idx}
            onClick={() => onClickCategoryIcon(item)}
            img={item.img}
            name={item.name}
            isSelected={item.categoryId == value}
          />
        ))}
      </HorizontalSlider>
      {errorMsg && <RegisterErrorMsg errorMsg={errorMsg} />}
    </RegisterClubCategoryLayout>
  );
}
const RegisterClubCategoryLayout = styled.div``;
