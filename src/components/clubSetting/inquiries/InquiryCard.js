import styled from "styled-components";
import InquiryCardInfo from "./InquiryCardInfo";
import ConfirmStateBox from "./ConfirmStateBox";
import { flexICenter } from "../../../styles/global.style";

export default function InquiryCard({ inquiryInfo }) {
  return (
    <InquiryCardLayout>
      <InquiryCardInfo title={inquiryInfo.title} date={inquiryInfo.date} />
      <ConfirmStateBox isConfirm={inquiryInfo.isConfirm} />
    </InquiryCardLayout>
  );
}

const InquiryCardLayout = styled.div`
  ${flexICenter}
  gap: 1rem;
  justify-content: space-between;
`;
