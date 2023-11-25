import styled from "styled-components";

export default function CustomInput({
  id,
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
  value,
  onChange,
  onkeyUp,
  register,
  name,
}) {
  const props = {
    id,
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
    value,
    onChange,
    onkeyUp,
  };
  return (
    <>
      {register ? (
        <CustomInputLayout {...register(name)} {...props} />
      ) : (
        <CustomInputLayout {...props} />
      )}
    </>
  );
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
  background-color: ${(props) =>
    props.border ? "white" : props.theme.colors.gray.xxs};
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => (props.border ? props.border : "none")};
  border-color: ${(props) => (props.border ? props.theme.colors.gray.xs : "")};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.bold};
  color: ${(props) => props.color};
  cursor: pointer;
`;
