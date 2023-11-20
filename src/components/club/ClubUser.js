import styled from "styled-components";
import example from "../../images/example.png";
import { flexColumn, flexICenter } from "../../styles/global.style";
import SmallTagBox from "../global/SmallTagBox";

export default function ClubUser({
  user,
  isComment,
  size,
  imgSize,
  dateColor,
  introColor,
  introSize,
  gap,
}) {
  const styles = { size, imgSize, dateColor, introColor, introSize, gap };
  return (
    <ClubUserLayout>
      <ClubUserImgBox {...styles} src={example} />
      <ClubUserDescriptionBox {...styles}>
        <span>
          {user.name}
          {user.position != undefined && (
            <SmallTagBoxBox>
              <SmallTagBox color="black" tagName={user.position} />
            </SmallTagBoxBox>
          )}
          {isComment && <span> 2023.11.10</span>}
        </span>

        <span>{user.intro}</span>
      </ClubUserDescriptionBox>
    </ClubUserLayout>
  );
}

ClubUser.defaultProps = {
  size: (props) => props.theme.sizes.xs,
  imgSize: "2.3rem",
  dateColor: (props) => props.theme.colors.gray.xs,
  introColor: (props) => props.theme.colors.gray.md,
  gap: "0.5rem",
};

const ClubUserLayout = styled.div`
  ${flexICenter};
  gap: 20px;
`;

const ClubUserImgBox = styled.img`
  width: ${(props) => props.imgSize};
  height: ${(props) => props.imgSize};
  border-radius: 50%;
`;

const ClubUserDescriptionBox = styled.div`
  ${flexColumn};
  gap: ${(props) => props.gap};

  & > span {
    font-size: ${(props) => props.size};
  }

  & > span:first-child {
    position: relative;
    & > span {
      color: ${(props) => props.dateColor};
    }
  }

  & > span:last-child {
    color: ${(props) => props.introColor};
    font-size: ${(props) => props.introSize};
  }
`;

const SmallTagBoxBox = styled.div`
  position: absolute;
  top: -4px;
  right: 0;
`;
