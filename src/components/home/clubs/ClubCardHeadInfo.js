import styled from "styled-components";
import SmallTagBox from "../../global/SmallTagBox";
import { BsFillPeopleFill } from "react-icons/bs";

export default function ClubCardHeadInfo({ name, category, personnel }) {
  return (
    <ClubCardHeadInfoLayout>
      <div>{name}</div>
      <ClubTagBox>
        <SmallTagBox tagName={category} />
        <SmallTagBox
          tagName={
            <PersonnelTagBox>
              <BsFillPeopleFill />
              {personnel}
            </PersonnelTagBox>
          }
        />
      </ClubTagBox>
    </ClubCardHeadInfoLayout>
  );
}

const ClubCardHeadInfoLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  & > div:first-child {
    font-size: ${(props) => props.theme.sizes.xl};
    font-weight: ${(props) => props.theme.weights.xl};
    vertical-align: top;
  }
`;

const ClubTagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const PersonnelTagBox = styled.div`
  display: flex;
  gap: 0.3rem;
`;
