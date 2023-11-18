import styled from "styled-components";
import PostBody from "./PostBody";
import PostWriter from "./PostWriter";
import PostHead from "./PostHead";
import PostReactionNum from "./PostReactionNum";
import example from "../../../images/example.png";
import { flexJBetween } from "../../../styles/global.style";

export default function Post() {
  return (
    <PostLayout>
      <PostHead clubName="Import" postCategory="공지" date="2023.03.11" />
      <PostBody
        postTitle="어제 우리 동아리 첫 회식!!!"
        postDetail="어제 회식을 했다 너무너무 맛있다최고최고 짱짱짱 맛있었다"
      />
      <PostBottomInfoRow>
        <PostWriter writerimg={example} writerName="정땡땡" />
        <PostReactionNum likesNum="20" commentNum="10" />
      </PostBottomInfoRow>
    </PostLayout>
  );
}

const PostLayout = styled.div``;

export const PostBottomInfoRow = styled.div`
  ${flexJBetween};
`;
