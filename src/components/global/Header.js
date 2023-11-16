import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi';
import logo from '../../images/logo.png';
import { flexJBetween } from '../../styles/global.style';

export default function Header({ left, center, right }) {
  return (
    <HeaderLayout>
      <HeaderItem>{left == 'logo' && <img src={logo} />}</HeaderItem>
      <HeaderItem>{center ? <div>{center}</div> : ''}</HeaderItem>
      <HeaderItem>{right == 'setting' && <FiSettings size={28} />}</HeaderItem>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  height: ${(props) => props.theme.global.header.height};
  ${flexJBetween};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  padding: 13px 20px;
`;

const HeaderItem = styled.div`
  img {
    height: 30px;
  }
`;
