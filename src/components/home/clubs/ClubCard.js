import styled from "styled-components";
import ClubCardHeadInfo from "./ClubCardHeadInfo";
import example from "../../../images/example.png";

export default function ClubCard({ club }) {
  return (
    <ClubCardLayout>
      <ClubCardImgBox src={example} />
      <ClubCardDescriptionBox>
        <ClubCardHeadInfo
          name={club.name}
          category={club.category}
          personnel={club.personnel}
        />
        <ClubIntroBox>{club.intro}</ClubIntroBox>
      </ClubCardDescriptionBox>
    </ClubCardLayout>
  );
}

const ClubCardLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ClubCardImgBox = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const ClubCardDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const ClubIntroBox = styled.div`
  font-size: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.colors.gray.md};
`;
