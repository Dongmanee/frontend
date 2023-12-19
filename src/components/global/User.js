import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import example from "../../images/example.png";
import { flexColumn, flexICenter } from "../../styles/global.style";
import SmallTagBox from "./SmallTagBox";

export default function User({
  user,
  isComment,
  size,
  imgSize,
  dateColor,
  introColor,
  introSize,
  introWeight,
  gap,
  isChat,
}) {
  const styles = { size, imgSize, dateColor, introColor, introSize, introWeight, gap };
  const navigate = useNavigate();
  const openUser = (userId) => {
    navigate(`/user/${userId}`);
  };

  return (
    <UserLayout onClick={() => !isChat && openUser(user.id)}>
      <UserImgBox {...styles} src={example} />
      <UserDescriptionBox {...styles}>
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
      </UserDescriptionBox>
    </UserLayout>
  );
}

User.defaultProps = {
  size: (props) => props.theme.sizes.xs,
  imgSize: "2.3rem",
  dateColor: (props) => props.theme.colors.gray.xs,
  introColor: (props) => props.theme.colors.gray.md,
  gap: "0.5rem",
};

const UserLayout = styled.div`
  ${flexICenter};
  gap: 20px;
`;

const UserImgBox = styled.img`
  width: ${(props) => props.imgSize};
  height: ${(props) => props.imgSize};
  border-radius: 50%;
`;

const UserDescriptionBox = styled.div`
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
    font-weight: ${(props) => props.introWeight};
  }
`;

const SmallTagBoxBox = styled.div`
  position: absolute;
  top: -4px;
  right: 0;
`;
