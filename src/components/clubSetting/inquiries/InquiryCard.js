import styled from "styled-components";
import InquiryCardInfo from "./InquiryCardInfo";
import ConfirmStateBox from "./ConfirmStateBox";
import { flexICenter } from "../../../assets/styles/global.style";
import { useNavigate } from "react-router-dom";

export default function InquiryCard({ inquiryInfo }) {
  const navigate = useNavigate();

  const onClickInquiryCard = (inquryId) => {
    navigate(`${inquryId}`);
  };

  return (
    <InquiryCardLayout onClick={() => onClickInquiryCard("inquiryId11")}>
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
