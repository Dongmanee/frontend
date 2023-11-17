import styled from 'styled-components';
import { flexColumn } from '../../styles/global.style';
import img from '../../images/sample.png';
import SmallTagBox from '../global/SmallTagBox';

const ClubInfo = () => {
  return (
    <ClubMainLayout>
      <img src={img} height={'50%'} />

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
    </ClubMainLayout>
  );
};

export default ClubInfo;

const ClubMainLayout = styled.div`
  max-height: 40vh;
  margin: 0 -23px;
  ${flexColumn};
`;

const Category = styled.div`
  display: flex;
  position: relative;
  padding: 5px 0 0 80px;

  & > img {
    border-radius: 50%;
    position: absolute;
    left: 5%;
    top: -2.8vh;
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
