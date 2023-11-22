import styled from "styled-components";
import RegisterLabel from "../../global/register/RegisterLabel";

export default function InquiryDetailItem({ label, contents }) {
  return (
    <InquiryDetailItemLayout>
      <RegisterLabel label={label} />
      <div>{contents}</div>
    </InquiryDetailItemLayout>
  );
}

const InquiryDetailItemLayout = styled.div``;
