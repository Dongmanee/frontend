import styled from "styled-components";
import { flexColumn, flexICenter } from "../../styles/global.style";
import example from "../../images/example.png";
import SmallTagBox from "../global/SmallTagBox";

export default function ClubUser({ user }) {
  return (
    <ClubUserLayout>
      <ClubUserImgBox src={example} />
      <ClubUserDescriptionBox>
        <span>
          {user.name}
          <SmallTagBoxBox>
            <SmallTagBox color="black" tagName={user.position} />
          </SmallTagBoxBox>
        </span>

        <span>{user.intro}</span>
      </ClubUserDescriptionBox>
    </ClubUserLayout>
  );
}

const ClubUserLayout = styled.div`
  ${flexICenter};
  gap: 20px;
`;

const ClubUserImgBox = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
`;

const ClubUserDescriptionBox = styled.div`
  ${flexColumn};
  gap: 0.5rem;

  & > span {
    font-size: ${(props) => props.theme.sizes.xs};
  }

  & > span:first-child {
    position: relative;
  }

  & > span:last-child {
    color: ${(props) => props.theme.colors.gray.md};
  }
`;

const SmallTagBoxBox = styled.div`
  position: absolute;
  top: -4px;
  right: 0;
`;
