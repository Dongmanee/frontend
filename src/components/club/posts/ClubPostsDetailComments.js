import styled from "styled-components";
import { flexColumn } from "../../../styles/global.style";
import User from "../../global/User";

export default function ClubPostsDetailComments() {
  const temp_comment = {
    name: "alphago",
    intro: "재밌는 글이네요~ 잘 보고 갑니다!!",
  };
  return (
    <ClubPostsDetailCommentsLayout>
      <User user={temp_comment} introColor={"black"} isComment={true} />
      <User user={temp_comment} introColor={"black"} isComment={true} />
      <User user={temp_comment} introColor={"black"} isComment={true} />
    </ClubPostsDetailCommentsLayout>
  );
}

const ClubPostsDetailCommentsLayout = styled.div`
  width: 100%;
  height: 15vh;
  ${flexColumn};
  padding: 20px 0;
  gap: 10px;
  overflow: hidden;
`;
