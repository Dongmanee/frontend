import styled from 'styled-components';
import { flexColumn } from '../../styles/global.style';
import img from '../../images/sample.png';
import SmallTagBox from '../global/SmallTagBox';

const ClubInfo = () => {
  return (
    <ClubInfoLayout>
      <BackgroundImage />

      <Category>
        <img src={img} width={50} height={50} />
        <CategoryTagRow>
          <SmallTagBox tagName="웹개발" />
          <SmallTagBox tagName="코딩" />
        </CategoryTagRow>
      </Category>

      <Info>
        <p>교내 유일 코딩동아리입니다!</p>
        <p>매주 화요일에 정기모임을 하고 있습니다.</p>
      </Info>
    </ClubInfoLayout>
  );
};

export default ClubInfo;

const ClubInfoLayout = styled.div`
  max-height: 40vh;
  margin: 0 -23px;
  ${flexColumn};
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
