import styled from "styled-components";
import { flexJBetween } from "../../../assets/styles/global.style";
import User from "../../global/User";

export default function ClubPostsDetailHead({ writer, date }) {
  return (
    <ClubPostDetailHeadLayout>
      <User user={writer} size={"18px"} imgSize={"2.5rem"} layoutGap={"15px"} />
      <div>{date}</div>
    </ClubPostDetailHeadLayout>
  );
}

const ClubPostDetailHeadLayout = styled.div`
  width: 100%;
  height: 5vh;
  ${flexJBetween};
  align-items: center;
  margin-top: 10px;

  & > div:last-child {
    font-size: ${(props) => props.theme.sizes.xs};
    color: ${(props) => props.theme.colors.gray.sm};
  }
`;
