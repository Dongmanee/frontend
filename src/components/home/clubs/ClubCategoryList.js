import styled from "styled-components";
import ProfileAndName from "../../global/ProfileAndName";
import { temp_clubs_catgory } from "../../../consts/tempData";

export default function ClubCategory() {
  return (
    <ClubCategoryLayout>
      {temp_clubs_catgory.map((item, idx) => (
        <ProfileAndName
          key={idx}
          img={item.img}
          name={item.name}
          isIcon={true}
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
