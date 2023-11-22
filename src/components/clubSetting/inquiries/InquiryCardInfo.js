import styled from "styled-components";
import { flexColumn } from "../../../styles/global.style";

export default function InquiryCardInfo({ title, date }) {
  return (
    <InquiryCardInfoLayout>
      <div>{title}</div>
      <div>{date}</div>
    </InquiryCardInfoLayout>
  );
}

const InquiryCardInfoLayout = styled.div`
  ${flexColumn}
  gap: 0.5rem;
  & > div:first-child {
    font-weight: ${(props) => props.theme.weights.lg};
    font-size: ${(props) => props.theme.sizes.sm};
  }
  & > div:last-child {
    font-size: ${(props) => props.theme.sizes.xs};
    color: ${(props) => props.theme.colors.gray.xs};
  }
`;
