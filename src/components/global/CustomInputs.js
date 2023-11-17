import styled from "styled-components";

export default function CustomInput({
  width,
  height,
  bgColor,
  radius,
  border,
  placeholder,
  padding,
  margin,
  fontSize,
  borderColor,
}) {
  const styles = {
    width,
    height,
    bgColor,
    border,
    radius,
    padding,
    margin,
    fontSize,
    borderColor,
  };
  return <CustomInputLayout {...styles} placeholder={placeholder} />;
}

CustomInput.defaultProps = {
  height: "2rem",
  radius: "5rem",
  padding: "0.08rem 1rem ",
  fontSize: "0.8rem",
};

const CustomInputLayout = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.colors.white.xs};
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => (props.border ? props.border : "")};
  border-color: ${(props) => (props.border ? props.theme.colors.gray.xs : "")};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.bold};
  color: ${(props) => props.color};
  cursor: pointer;
`;
