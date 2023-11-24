import styled from "styled-components";
import { flexCenter } from "../../styles/global.style";

const CustomButton = ({
  width,
  height,
  bgColor,
  radius,
  size,
  bold,
  color,
  children,
  padding,
  border,
  onClick,
}) => {
  const styles = {
    width,
    height,
    bgColor,
    radius,
    size,
    bold,
    color,
    padding,
    border,
  };
  return (
    <StyledbuttonLayout onClick={onClick} {...styles}>
      {children}
    </StyledbuttonLayout>
  );
};

export default CustomButton;

CustomButton.defaultProps = {
  width: "5rem",
  height: "5rem",
  radius: "0.75rem",
  size: "1rem",
  bold: 600,
  color: "black",
  border: "none",
};

const StyledbuttonLayout = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${flexCenter};
  gap: 5px;
  background-color: ${(props) => props.bgColor};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  cursor: pointer;
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.bold};
  font-family: "Noto Sans KR", sans-serif;
  color: ${(props) => props.color};
  white-space: nowrap;
`;
