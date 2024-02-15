import styled from "styled-components";
import ClubCardHeadInfo from "./ClubCardHeadInfo";
import example from "../../../images/example.png";
import { flexColumn, flexICenter } from "../../../styles/global.style";
import { useNavigate, useParams } from "react-router-dom";

export default function ClubCard({ club }) {
  const { univId } = useParams();
  const navigate = useNavigate();

  const onClickClubCard = (clubId) => {
    if (univId) navigate(`club/${clubId}`);
    else navigate(`/club/${clubId}`);
  };

  return (
    <ClubCardLayout onClick={() => onClickClubCard(club.clubId)}>
      <ClubCardImgBox src={example} />
      <ClubCardDescriptionBox>
        <ClubCardHeadInfo
          name={club.clubName}
          category={club.clubSubCategory}
          personnel={club.personnel}
        />
        <ClubIntroBox>{club.clubDescription}</ClubIntroBox>
      </ClubCardDescriptionBox>
    </ClubCardLayout>
  );
}

const ClubCardLayout = styled.div`
  ${flexICenter};
  gap: 1rem;
`;

const ClubCardImgBox = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const ClubCardDescriptionBox = styled.div`
  ${flexColumn};
  gap: 0.7rem;
`;

const ClubIntroBox = styled.div`
  font-size: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.colors.gray.md};
`;
