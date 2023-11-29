import styled from "styled-components";
import ProfileAndName from "../../global/ProfileAndName";
import { temp_clubs_catgory } from "../../../consts/tempData";
import CategoryIcon from "../../global/CategoryIcon";
import { useSearchParams } from "react-router-dom";

export default function ClubCategory() {
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickCategoryIcon = (categoryId) => {
    if (categoryId == "") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const setIsSelected = (categoryId) => {
    const currentCategory = searchParams.get("category");

    if (categoryId == "" && currentCategory == null) return true;
    return currentCategory == categoryId;
  };

  return (
    <ClubCategoryLayout>
      {temp_clubs_catgory.map((item, idx) => (
        <CategoryIcon
          key={idx}
          img={item.img}
          name={item.name}
          onClick={() => onClickCategoryIcon(item.categoryId)}
          isSelected={setIsSelected(item.categoryId)}
        />
      ))}
    </ClubCategoryLayout>
  );
}

const ClubCategoryLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
  padding: 10px 0;
`;
