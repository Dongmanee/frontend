import styled from "styled-components";
import ProfileAndName from "../global/ProfileAndName";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { temp_my_club } from "../../consts/tempData";
import HorizontalSlider from "../global/HorizontalSlider";

export default function HomeClubList() {
  const navigate = useNavigate();

  const onClickAddButton = () => {
    navigate("/clubs");
  };

  const onClickClub = (clubId) => {
    navigate(`/club/${clubId}`);
  };

  return (
    <HomeClubListLayout>
      <ClubListBox>
        <HorizontalSlider>
          {temp_my_club.map((club) => (
            <ProfileAndName
              name={club.clubName}
              onClick={() => onClickClub(club.clubId)}
            />
          ))}
        </HorizontalSlider>
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
  margin-top: 10px;
  color: white;
  font-size: 20px;
`;

const ClubListBox = styled.div`
  display: flex;
  gap: 20px;
  width: 75vw;
`;
