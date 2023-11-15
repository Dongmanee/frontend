import styled from 'styled-components';
import { flexCenter } from '../../styles/global.style';

const Styledbutton = ({
  width,
  height,
  bgColor,
  radius,
  size,
  bold,
  color,
  children,
}) => {
  const styles = { width, height, bgColor, radius, size, bold, color };
  return <StyledbuttonLayout {...styles}>{children}</StyledbuttonLayout>;
};

export default Styledbutton;

Styledbutton.defaultProps = {
  width: '5rem',
  height: '5rem',
  radius: '0.75rem',
  size: '1rem',
  bold: 600,
  color: 'black',
};

const StyledbuttonLayout = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${flexCenter};
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => props.radius};
  cursor: pointer;

  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.bold};
  color: ${(props) => props.color};
`;
