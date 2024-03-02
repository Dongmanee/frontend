import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import example from "../../assets/images/example.png";
import { flexColumn, flexICenter } from "../../assets/styles/global.style";
import SmallTagBox from "./SmallTagBox";

export default function User({
  user,
  commentDate,
  size: $size,
  imgSize: $imgSize,
  dateColor: $dateColor,
  introColor: $introColor,
  introSize: $introSize,
  introWeight: $introWeight,
  layoutGap: $layoutGap,
  message,
  gap: $gap,
  isChat,
}) {
  const styles = {
    $size,
    $imgSize,
    $dateColor,
    $introColor,
    $introSize,
    $introWeight,
    $gap,
  };
  const navigate = useNavigate();

  const openUser = (userId) => {
    navigate(`/user/${userId}`);
  };

  return (
    <UserLayout
      $layoutGap={$layoutGap}
      onClick={() => !isChat && openUser(user.userId ? user.userId : user.id)}
    >
      <UserImgBox {...styles} src={user.userImage || example} />
      <UserDescriptionBox {...styles}>
        <span>
          {user.userName ? user.userName : user.name}
          {user.position != undefined && (
            <SmallTagBoxBox>
              <SmallTagBox color="black" tagName={user.position} />
            </SmallTagBoxBox>
          )}
          {commentDate && <span>{commentDate}</span>}
        </span>

        <span>{isChat ? message : user.intro}</span>
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
  layoutGap: "20px",
};

const UserLayout = styled.div`
  ${flexICenter};
  gap: ${(props) => props.$layoutGap};
`;

const UserImgBox = styled.img`
  width: ${(props) => props.$imgSize};
  height: ${(props) => props.$imgSize};
  border-radius: 50%;
`;

const UserDescriptionBox = styled.div`
  ${flexColumn};
  gap: ${(props) => props.$gap};

  & > span {
    font-size: ${(props) => props.$size};
  }

  & > span:first-child {
    position: relative;
    & > span {
      margin-left: 10px;
      color: ${(props) => props.$dateColor};
    }
  }

  & > span:last-child {
    color: ${(props) => props.$introColor};
    font-size: ${(props) => props.$introSize};
    font-weight: ${(props) => props.$introWeight};
  }
`;

const SmallTagBoxBox = styled.div`
  position: absolute;
  top: -4px;
  right: 0;
`;
