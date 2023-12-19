import styled from "styled-components";
import SmallTagBox from "../SmallTagBox";

export default function PostHead({ clubName, postCategory, date }) {
  return (
    <PostHeadLayout>
      <PostClubInfoBox>
        {clubName && <ClubNameBox>{clubName}</ClubNameBox>}
        {postCategory && <SmallTagBox tagName={postCategory} />}
      </PostClubInfoBox>
      <PostDateBox>{date}</PostDateBox>
    </PostHeadLayout>
  );
}

const PostHeadLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostClubInfoBox = styled.div`
  display: flex;
  gap: 10px;
`;

const ClubNameBox = styled.div`
  font-weight: 700;
  font-size: 15px;
`;

const PostDateBox = styled.div`
  font-size: 12px;
  color: #b3b3b3;
`;
