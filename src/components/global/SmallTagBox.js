import styled from "styled-components";
import { flexCenter } from "../../styles/global.style";

export default function SmallTagBox({ tagName, bgColor, color }) {
  const styles = { bgColor, color };
  return <SmallTagBoxLayout {...styles}>{tagName}</SmallTagBoxLayout>;
}

SmallTagBox.defaultProps = {
  bgColor: "#f8f8f8",
  color: "#b3b3b3",
};

const SmallTagBoxLayout = styled.div`
  ${flexCenter};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: 11px;
  padding: 4px 5px;
  border-radius: 15px;
  font-weight: 700;
`;
