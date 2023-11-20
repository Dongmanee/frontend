import styled from "styled-components";
import { flexCenter } from "../../styles/global.style";

export default function SmallTagBox({ tagName, bgColor, color, size, padding }) {
  const styles = { bgColor, color, size, padding };
  return <SmallTagBoxLayout {...styles}>{tagName}</SmallTagBoxLayout>;
}

SmallTagBox.defaultProps = {
  bgColor: "#f8f8f8",
  color: "#b3b3b3",
  size: "11px",
  padding: "4px 5px",
};

const SmallTagBoxLayout = styled.div`
  ${flexCenter};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  padding: ${(props) => props.padding};
  border-radius: 15px;
  font-weight: 700;
  white-space: nowrap;
`;
