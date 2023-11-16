import styled from "styled-components";

export default function SmallTagBox({ tagName }) {
  return <SmallTagBoxLayout>{tagName}</SmallTagBoxLayout>;
}

const SmallTagBoxLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  color: #b3b3b3;
  font-size: 11px;
  padding: 4px 5px;
  border-radius: 15px;
  font-weight: 700;
`;
