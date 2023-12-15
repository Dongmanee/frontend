import styled from "styled-components";
import { flexJBetween } from "../../../styles/global.style";
import User from "../../global/User";

export default function ClubPostsDetailHead() {
  const temp_user = {
    name: "김기범",
  };

  return (
    <ClubPostDetailHeadLayout>
      <User user={temp_user} size={"18px"} imgSize={"2.5rem"} />
      <div>8월 7일 오후 11:33</div>
    </ClubPostDetailHeadLayout>
  );
}

const ClubPostDetailHeadLayout = styled.div`
  width: 100%;
  height: 5vh;
  ${flexJBetween};
  align-items: center;
  margin-top: 20px;

  & > div:last-child {
    font-size: ${(props) => props.theme.sizes.xs};
    color: ${(props) => props.theme.colors.gray.sm};
  }
`;
