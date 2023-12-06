import styled from "styled-components";
import { flexColumn } from "../../styles/global.style";
import img from "../../images/sample.png";
import SmallTagBox from "../global/SmallTagBox";
import { temp_club_home_info } from "../../consts/tempData";
import instagramIcon from "../../images/sns_icons/instagramIcon.png";
import naverBandIcon from "../../images/sns_icons/naverBandIcon.png";
import naverBlogIcon from "../../images/sns_icons/naverBlogIcon.png";

export default function ClubInfo() {
  const club = temp_club_home_info;

  return (
    <ClubInfoLayout>
      <BackgroundImage />

      <Category>
        <img src={club.clubMainImage} width={50} height={50} />
        <CategoryTagRow>
          {club.clubTags.map((tag, idx) => (
            <SmallTagBox tagName={tag} />
          ))}
        </CategoryTagRow>
      </Category>

      <Info>{club.clubIntro}</Info>

      <SnsBox>
        {club.clubSns.map((sns, idx) => {
          switch (sns.Snsname) {
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

const BackgroundImage = styled.div`
  width: 100%;
  height: 40vh;

  background-image: url(${img});
  background-size: 100% 100%;
  background-position: center center;
`;

const Category = styled.div`
  display: flex;
  position: relative;
  padding: 5px 0 0 80px;

  & > img {
    border-radius: 50%;
    position: absolute;
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
