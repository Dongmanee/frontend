import styled from "styled-components";
import { flexCenter } from "../../../styles/global.style";

export default function ResignButton() {
  return <ResignButtonLayout>추방</ResignButtonLayout>;
}

const ResignButtonLayout = styled.div`
  ${flexCenter}
  min-width: 2rem;
  border-radius: 1rem;
  padding: 0.5rem;
  /* background-color: ${(props) => props.theme.colors.gray.xxs}; */
  font-size: ${(props) => props.theme.sizes.xxs};
  font-weight: ${(props) => props.theme.weights.lg};
  color: red;
`;
