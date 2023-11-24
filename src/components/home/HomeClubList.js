import styled from "styled-components";
import ProfileAndName from "../global/ProfileAndName";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function HomeClubList() {
  const navigate = useNavigate();

  const onClickAddButton = () => {
    navigate("/clubs");
  };

  return (
    <HomeClubListLayout>
      <ClubListBox>
        <ProfileAndName name="동아리1" />
        <ProfileAndName name="동아리2" />
      </ClubListBox>
      <AddClubButton onClick={onClickAddButton}>
        <FaPlus />
      </AddClubButton>
    </HomeClubListLayout>
  );
}

const HomeClubListLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
`;

const AddClubButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f3e3e;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  font-size: 20px;
`;

const ClubListBox = styled.div`
  display: flex;
  gap: 20px;
`;
