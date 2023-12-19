import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { temp_clubs_category } from "../../../consts/tempData";
import CategoryIcon from "../../global/CategoryIcon";

export default function ClubCategory({ setKeywordReset }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickCategoryIcon = (categoryId) => {
    if (categoryId == "") {
      searchParams.delete("category");
      searchParams.delete("keyword");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: categoryId });
    }
    setKeywordReset();
  };

  const setIsSelected = (categoryId) => {
    const currentCategory = searchParams.get("category");

    if (categoryId == "" && currentCategory == null) return true;
    return currentCategory == categoryId;
  };

  return (
    <ClubCategoryLayout>
      {temp_clubs_category.map((item, idx) => (
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
