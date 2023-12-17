import styled from "styled-components";
import img from "../../images/sample.png";
import instagramIcon from "../../images/sns_icons/instagramIcon.png";
import naverBandIcon from "../../images/sns_icons/naverBandIcon.png";
import naverBlogIcon from "../../images/sns_icons/naverBlogIcon.png";
import { flexColumn } from "../../styles/global.style";
import SmallTagBox from "../global/SmallTagBox";

export default function ClubInfo({ clubHomeInfo }) {
  return (
    <ClubInfoLayout>
      <BackgroundImage src={clubHomeInfo.clubBackgroundImage} />

      <Category>
        <img src={clubHomeInfo.clubMainImage} />
        <CategoryTagRow>
          {clubHomeInfo.clubTags.map((tag, idx) => (
            <SmallTagBox key={idx} tagName={tag} />
          ))}
        </CategoryTagRow>
      </Category>

      <Info>{clubHomeInfo.clubIntro}</Info>

      <SnsBox>
        {clubHomeInfo.clubSns.map((sns, idx) => {
          switch (sns.snsName) {
            case "instagram":
              return <img src={instagramIcon} />;
            case "naverBlog":
              return <img src={naverBlogIcon} />;
            case "naverBand":
              return <img src={naverBandIcon} />;
          }
        })}
      </SnsBox>
    </ClubInfoLayout>
  );
}

const ClubInfoLayout = styled.div`
  ${flexColumn};
  max-height: 40vh;
  margin: 0 -23px;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 40vh;

  background-size: 100% 100%;
  background-position: center center;
`;

const Category = styled.div`
  display: flex;
  position: relative;
  padding: 10px 0 10px 90px;

  & > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    object-fit: cover;
    left: 5vw;
    top: -2.8vh;

    @media screen and (min-width: 1000px) {
      left: 1vw;
    }
  }
`;

const CategoryTagRow = styled.div`
  display: flex;
  gap: 10px;
`;

const Info = styled.div`
  padding: 20px;

  line-height: 170%;
`;

const SnsBox = styled.div`
  display: flex;
  gap: 0.8rem;

  padding: 10px 20px;
  img {
    width: 2rem;
  }
`;
