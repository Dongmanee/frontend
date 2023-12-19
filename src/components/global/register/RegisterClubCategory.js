import styled from "styled-components";
import ClubCategory from "../../home/clubs/ClubCategoryList";
import RegisterLabel from "./RegisterLabel";
import { temp_clubs_category } from "../../../consts/tempData";
import ProfileAndName from "../ProfileAndName";
import RegisterErrorMsg from "./RegisterErrorMsg";
import HorizontalSlider from "../HorizontalSlider";
import CategoryIcon from "../CategoryIcon";
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
        {temp_clubs_category.map((item, idx) => (
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
