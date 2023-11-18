import styled from 'styled-components';
import { flexColumn } from '../../styles/global.style';

const Clubpage = ({ title, children }) => {
  return (
    <ClubPageLayout>
      <Title>{title}</Title>
      {children}
    </ClubPageLayout>
  );
};

export default Clubpage;

const ClubPageLayout = styled.div`
  ${flexColumn};
  padding: 10px 0;
`;

const Title = styled.div`
  padding: 14px 0;

  font-size: ${(props) => props.theme.sizes.xl};
  font-weight: ${(props) => props.theme.weights.lg};
`;
