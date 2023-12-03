import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const club_home_setting_item = [
  { name: "정보 수정", url: "edit" },
  { name: "신청 내역", url: "applications" },
  { name: "문의 내역", url: "inquiries" },
  { name: "멤버 관리", url: "members" },
];

export default function ClubSettingDropDown() {
  const navigate = useNavigate();

  const onClickClubSettingItem = (clubId, url) => {
    navigate(`/club/${clubId}/setting/${url}`);
  };

  return (
    <ClubSettingDropDownLayout>
      {club_home_setting_item.map((item) => (
        <div onClick={() => onClickClubSettingItem("clubId111", item.url)}>
          {item.name}
        </div>
      ))}
    </ClubSettingDropDownLayout>
  );
}

const ClubSettingDropDownLayout = styled.div`
  position: absolute;
  z-index: 3;
  right: 0;
  top: 3rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0.8rem;

  & > div {
    padding: 1rem;
  }
`;
